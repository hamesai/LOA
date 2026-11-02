#!/usr/bin/env python3
"""Serve the Education Archive and answer lecturer review requests locally.

    python _template/serve_archive.py [--port 8777] [--backend auto|claude|ollama|echo]

The archive page looks for GET /api/ping. If it finds this helper, each module's
"Ask <lecturer> to review your work" section gains a "Get the review here" button
that POSTs the prompt to /api/review and shows the reply. Without the helper the
page still works: it copies the prompt so you can paste it into Claude yourself.

Backends (the first that works is used with --backend auto):
    claude   the Claude Code CLI on PATH, run as `claude -p` with the prompt on stdin
    ollama   a local Ollama server at 127.0.0.1:11434 (model from LOA_OLLAMA_MODEL, default llama3.1)
    echo     returns the prompt back, for testing the plumbing only

Safety: binds to 127.0.0.1 only, accepts only local Host headers, caps the request
size, never uses a shell, and runs the CLI in an empty temporary folder.
NOTE: this helper was tested with the echo backend only. The claude and ollama
backends are written to those tools' documented interfaces but have not been run here.
"""
import argparse, json, os, shutil, subprocess, sys, tempfile, urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAX_BODY = 60_000
TIMEOUT = 180


def backend_available(name):
    if name == "echo":
        return True
    if name == "claude":
        return shutil.which("claude") is not None
    if name == "ollama":
        try:
            urllib.request.urlopen("http://127.0.0.1:11434/api/tags", timeout=1.5).read()
            return True
        except Exception:
            return False
    return False


def choose_backend(pref):
    if pref != "auto":
        return pref if backend_available(pref) else None
    for n in ("claude", "ollama"):
        if backend_available(n):
            return n
    return None


def run_backend(name, prompt):
    if name == "echo":
        return "[echo backend] " + prompt[:1500]
    if name == "claude":
        with tempfile.TemporaryDirectory() as tmp:
            r = subprocess.run(["claude", "-p"], input=prompt, capture_output=True, text=True, timeout=TIMEOUT, cwd=tmp)
        if r.returncode != 0:
            raise RuntimeError((r.stderr or "claude exited with an error")[:400])
        return r.stdout.strip()
    if name == "ollama":
        body = json.dumps({"model": os.environ.get("LOA_OLLAMA_MODEL", "llama3.1"), "prompt": prompt, "stream": False}).encode()
        req = urllib.request.Request("http://127.0.0.1:11434/api/generate", data=body, headers={"Content-Type": "application/json"})
        return json.loads(urllib.request.urlopen(req, timeout=TIMEOUT).read())["response"].strip()
    raise RuntimeError("no backend")


class Handler(SimpleHTTPRequestHandler):
    backend = None
    port = 8777

    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)

    def _local(self):
        host = (self.headers.get("Host") or "").split(":")[0]
        return host in ("127.0.0.1", "localhost")

    def _json(self, code, obj):
        data = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        if self.path == "/api/ping":
            if not self._local():
                return self._json(403, {"ok": False})
            return self._json(200, {"ok": True, "backend": self.backend})
        return super().do_GET()

    def do_POST(self):
        if self.path != "/api/review":
            return self._json(404, {"error": "not found"})
        if not self._local():
            return self._json(403, {"error": "local requests only"})
        try:
            n = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            n = 0
        if n <= 0 or n > MAX_BODY:
            return self._json(413, {"error": "request too large or empty"})
        try:
            prompt = json.loads(self.rfile.read(n).decode("utf-8"))["prompt"]
            if not isinstance(prompt, str) or not prompt.strip():
                raise ValueError("empty prompt")
        except Exception:
            return self._json(400, {"error": "send JSON like {\"prompt\": \"...\"}"})
        if not self.backend:
            return self._json(503, {"error": "no model backend is available"})
        try:
            return self._json(200, {"reply": run_backend(self.backend, prompt), "backend": self.backend})
        except Exception as e:
            return self._json(502, {"error": str(e)[:400]})

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--port", type=int, default=8777)
    ap.add_argument("--backend", default="auto", choices=["auto", "claude", "ollama", "echo"])
    a = ap.parse_args()
    Handler.backend = choose_backend(a.backend)
    Handler.port = a.port
    print("Serving %s at http://127.0.0.1:%d  (review backend: %s)" % (ROOT, a.port, Handler.backend or "none, the page will copy prompts instead"))
    ThreadingHTTPServer(("127.0.0.1", a.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
