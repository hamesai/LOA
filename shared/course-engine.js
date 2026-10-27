/* Course engine: turns the lesson content in COURSE into (1) a detailed slide deck and (2) a long-form reading view.
   Slides are the primary learning surface; the reading view ("Notes") renders the same blocks as an article. */
(function () {
  "use strict";
  var COURSE = window.COURSE = window.COURSE || {};
  var REFS = window.COURSE_REFS || {};
  var CE = window.CourseEngine = { state: {}, figs: {} };

  function h(tag, props) {
    var el = document.createElement(tag), i, c;
    props = props || {};
    for (var k in props) {
      if (k === "text") el.textContent = props[k];
      else if (k === "class") el.className = props[k];
      else if (k === "style") el.setAttribute("style", props[k]);
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), props[k]);
      else if (props[k] !== undefined && props[k] !== null) el.setAttribute(k, props[k]);
    }
    for (i = 2; i < arguments.length; i++) {
      c = arguments[i];
      if (c == null) continue;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }
  function safeUrl(u) { return /^https?:\/\//i.test(u || "") ? u : null; }
  /* Every source gets a link. Where no address is recorded (most book chapters), it searches for the source instead. */
  function refHref(r) {
    var u = safeUrl(r.u);
    if (u) return u;
    var q = String(r.s || "").split(",")[0] + " " + String(r.t || "").split(/[:(]/)[0].trim();
    return "https://www.google.com/search?tbm=bks&q=" + encodeURIComponent(q.trim());
  }
  function refTitle(r) { return safeUrl(r.u) ? r.t : r.t + " (search for this source)"; }

  /* ---------- citations and rich text ---------- */
  function refNums(c) {
    var nums = {}, n = 0, s = JSON.stringify([c.intro, c.outcomes, c.lessons]), re = /\{\{([a-z0-9-]+)\}\}/g, m;
    while ((m = re.exec(s)) !== null) if (!nums[m[1]] && REFS[m[1]]) nums[m[1]] = ++n;
    return nums;
  }
  function rich(text, nums) {
    var frag = document.createDocumentFragment(), re = /\{\{([a-z0-9-]+)\}\}|\*\*(.+?)\*\*|`([^`]+)`/g, last = 0, m;
    text = String(text == null ? "" : text);
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (m[1]) {
        var r = REFS[m[1]];
        if (r) {
          var label = String(nums[m[1]] || "?");
          frag.appendChild(h("sup", { class: "cite" }, h("a", { href: refHref(r), target: "_blank", rel: "noopener noreferrer", title: refTitle(r) + ", " + r.s, text: label })));
        }
      } else if (m[2]) frag.appendChild(h("strong", { text: m[2] }));
      else if (m[3]) frag.appendChild(h("code", { text: m[3] }));
      last = re.lastIndex;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }
  function rp(tag, text, nums, props) { var e = h(tag, props); e.appendChild(rich(text, nums)); return e; }

  function sentences(t) {
    t = String(t).replace(/\s+(\{\{[a-z0-9-]+\}\})/g, "$1");
    var out = [], re = /[\s\S]+?[.!?]["”)]*(?:\{\{[a-z0-9-]+\}\})*(?=\s|$)/g, m, last = 0;
    while ((m = re.exec(t)) !== null) { out.push(m[0].trim()); last = re.lastIndex; }
    var rest = t.slice(last).trim();
    if (rest) out.push(rest);
    return out;
  }
  function wordCount(s) { return String(s).replace(/\{\{[^}]+\}\}/g, "").split(/\s+/).filter(Boolean).length; }

  /* ---------- figures ---------- */
  var NS = "http://www.w3.org/2000/svg";
  function S(tag, attrs) {
    var e = document.createElementNS(NS, tag), k, i, c;
    attrs = attrs || {};
    for (k in attrs) e.setAttribute(k, attrs[k]);
    for (i = 2; i < arguments.length; i++) { c = arguments[i]; if (c == null) continue; e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); }
    return e;
  }
  CE.S = S;
  function figure(id, cap) {
    var fn = CE.figs[id], box = h("figure", { class: "fig" });
    if (fn) box.appendChild(fn());
    else box.appendChild(h("p", { class: "empty", text: "Figure not available." }));
    if (cap) box.appendChild(h("figcaption", { text: cap }));
    return box;
  }

  /* ---------- block renderers (shared by slides and notes) ---------- */
  var CALLOUT = { key: "Key idea", tip: "Tip", warn: "Watch out", note: "Note" };
  function drawCheck(b, ctx) {
    var key = (ctx.prefix || "") + "|" + b.q, box = h("div", { class: "chk-q" });
    function paint() {
      box.textContent = "";
      var given = CE.state[key], wr = CE.state[key + "|w"] || [], shown = !!CE.state[key + "|r"], done = given === b.a || shown;
      box.appendChild(h("p", { class: "q", text: b.q }));
      var opts = h("div", { class: "qopts" });
      b.o.forEach(function (o, i) {
        var cls = "qopt", dis = false;
        if (done) { dis = true; if (i === b.a) cls += " right"; else if (wr.indexOf(i) >= 0) cls += " wrong"; }
        else if (wr.indexOf(i) >= 0) { dis = true; cls += " wrong"; }
        opts.appendChild(h("button", { class: cls, type: "button", disabled: dis ? "disabled" : null, text: o, onclick: function () {
          if (i === b.a) CE.state[key] = i; else CE.state[key + "|w"] = (CE.state[key + "|w"] || []).concat([i]);
          paint();
        } }));
      });
      box.appendChild(opts);
      function reset() { delete CE.state[key]; delete CE.state[key + "|w"]; delete CE.state[key + "|r"]; paint(); }
      if (given === b.a) {
        box.appendChild(rp("p", (wr.length ? "Correct on try " + (wr.length + 1) + ". " : "Correct. ") + b.w, ctx.nums, { class: "qwhy" }));
        if (wr.length) box.appendChild(h("button", { class: "btn ghost", type: "button", text: "Repeat this question", onclick: reset }));
      } else if (shown) {
        box.appendChild(rp("p", "Answer shown. " + b.w, ctx.nums, { class: "qwhy" }));
        box.appendChild(h("button", { class: "btn ghost", type: "button", text: "Try this question again", onclick: reset }));
      } else if (wr.length) {
        box.appendChild(h("p", { class: "qwhy", text: "Not quite. Choose another answer." }));
        box.appendChild(h("button", { class: "btn ghost", type: "button", text: "Show the answer", onclick: function () { CE.state[key + "|r"] = 1; paint(); } }));
      }
      fitNearest(box);
    }
    paint();
    return box;
  }
  function drawVideo(b) {
    var watch = b.list ? "https://www.youtube.com/playlist?list=" + b.list : "https://www.youtube.com/watch?v=" + b.id + (b.start ? "&t=" + b.start + "s" : "");
    var embed = b.list ? "https://www.youtube-nocookie.com/embed/videoseries?list=" + b.list : "https://www.youtube-nocookie.com/embed/" + b.id + "?rel=0" + (b.start ? "&start=" + b.start : "");
    var holder = h("div", { class: "vid-frame" });
    var card = h("div", { class: "vid" },
      h("div", { class: "vid-t", text: b.title }), h("div", { class: "vid-by", text: b.by || "" }),
      b.note ? h("p", { class: "vid-n", text: b.note }) : null,
      holder,
      h("div", { class: "row" },
        h("button", { class: "btn", type: "button", text: "Play here", onclick: function (ev) {
          holder.textContent = "";
          holder.appendChild(h("iframe", { src: embed, title: b.title, loading: "lazy", allowfullscreen: "allowfullscreen", referrerpolicy: "strict-origin-when-cross-origin" }));
          ev.currentTarget.hidden = true;
          fitNearest(holder);
        } }),
        h("a", { class: "btn ghost", href: watch, target: "_blank", rel: "noopener noreferrer", text: "Open on YouTube" })),
      h("p", { class: "vid-h", text: "If the player shows an error, use Open on YouTube. Some browsers block embeds on pages opened from a file." }));
    return card;
  }
  function drawTable(b, nums) {
    var t = h("table"), thead = h("thead"), tr = h("tr"), tb = h("tbody");
    b.head.forEach(function (x) { tr.appendChild(rp("th", x, nums)); });
    thead.appendChild(tr); t.appendChild(thead);
    b.rows.forEach(function (r) { var row = h("tr"); r.forEach(function (c) { row.appendChild(rp("td", c, nums)); }); tb.appendChild(row); });
    t.appendChild(tb);
    var wrap = h("div", { class: "tscroll ctable" }, t);
    if (b.src) wrap.appendChild(rp("p", "Sources: " + b.src, nums, { class: "tsrc" }));
    return wrap;
  }
  function drawTerms(items, nums) {
    var dl = h("dl", { class: "terms" });
    items.forEach(function (it) { dl.appendChild(h("dt", { text: it[0] })); dl.appendChild(rp("dd", it[1], nums)); });
    return dl;
  }
  function drawList(items, ordered, nums) {
    var l = h(ordered ? "ol" : "ul");
    items.forEach(function (x) { l.appendChild(rp("li", x, nums)); });
    return l;
  }
  function drawCallout(b, nums) { return h("div", { class: "cl cl-" + (b.k || "note") }, h("strong", { class: "cl-l", text: CALLOUT[b.k || "note"] }), rp("p", b.x, nums)); }
  function drawExample(title, steps, nums) { return h("div", { class: "ex" }, h("div", { class: "ex-t", text: title }), drawList(steps, true, nums)); }
  function drawActivity(x, nums) { return h("div", { class: "act" }, h("strong", { class: "act-l", text: "Activity" }), rp("p", x, nums)); }
  function drawTake(items, nums) { return h("div", { class: "keytake" }, h("strong", { class: "keytake-l", text: "Key takeaways" }), drawList(items, false, nums)); }

  function renderBlock(b, ctx) {
    var n = ctx.nums;
    switch (b.t) {
      case "p": return rp("p", b.x, n);
      case "h": return h("h3", { text: b.x });
      case "ul": return drawList(b.i, false, n);
      case "ol": return drawList(b.i, true, n);
      case "table": return drawTable(b, n);
      case "callout": return drawCallout(b, n);
      case "fig": return figure(b.id, b.cap);
      case "video": return drawVideo(b);
      case "example": return drawExample(b.title, b.steps, n);
      case "activity": return drawActivity(b.x, n);
      case "check": return drawCheck(b, ctx);
      case "terms": return drawTerms(b.i, n);
      case "take": return drawTake(b.i, n);
    }
    return h("span");
  }

  /* ---------- lecturer (summoned voice) ---------- */
  CE.lecturer = function (key) { return (window.COURSE_LECTURERS || {})[key] || null; };
  CE.lnote = function (key, i) { var a = (window.COURSE_LNOTES || {})[key]; return a && a[i] ? a[i] : null; };
  function lecturerCard(Lc) {
    return h("aside", { class: "lecturer" },
      h("span", { class: "mono lec-k", text: "Your lecturer" }),
      h("h4", { text: Lc.name + " (" + Lc.years + ")" }),
      h("p", { class: "lec-known", text: Lc.known + "." }),
      h("p", { class: "lec-why", text: "Why here: " + Lc.why }),
      Lc.src && safeUrl(Lc.src) ? h("p", { class: "lec-src" }, h("a", { href: safeUrl(Lc.src), target: "_blank", rel: "noopener noreferrer", text: "Biography source" })) : null,
      h("blockquote", { text: Lc.welcome }),
      h("p", { class: "lec-note mono", text: "Simulated voice written for teaching. Not a real quotation." }));
  }

  /* ---------- reading view ---------- */
  CE.article = function (m) {
    var c = COURSE[m.key], nums = refNums(c), ctx = { nums: nums, prefix: m.key }, root = h("article", { class: "notes" });
    var Lc = CE.lecturer(m.key); if (Lc) root.appendChild(lecturerCard(Lc));
    root.appendChild(rp("p", c.intro, nums, { class: "lead" }));
    var o = h("div", { class: "msec" }, h("h4", { text: "Learning outcomes" }), drawList(c.outcomes, false, nums));
    root.appendChild(o);
    c.lessons.forEach(function (L, i) {
      var sec = h("section", { class: "lesson" }, h("h2", { text: "Lesson " + (i + 1) + ": " + L.title }), h("p", { class: "mono lmeta", text: "About " + L.min + " minutes" }));
      var ln = CE.lnote(m.key, i); if (ln && Lc) sec.appendChild(h("blockquote", { class: "lec-note-q" }, h("strong", { text: Lc.name + ": " }), ln));
      L.blocks.forEach(function (b) { sec.appendChild(renderBlock(b, ctx)); });
      root.appendChild(sec);
    });
    var terms = [];
    c.lessons.forEach(function (L) { L.blocks.forEach(function (b) { if (b.t === "terms") terms = terms.concat(b.i); }); });
    if (terms.length) {
      terms.sort(function (a, b) { return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1; });
      root.appendChild(h("section", { class: "lesson" }, h("h2", { text: "Glossary" }), drawTerms(terms, nums)));
    }
    var refs = h("ol", { class: "refs" }), order = Object.keys(nums).sort(function (a, b) { return nums[a] - nums[b]; });
    order.forEach(function (k) {
      var r = REFS[k];
      refs.appendChild(h("li", {}, h("a", { href: refHref(r), target: "_blank", rel: "noopener noreferrer", title: refTitle(r), text: r.t }), h("span", { class: "refs-s", text: " " + r.s + (r.p ? ", " + r.p : "") + (r.d ? ". Checked " + r.d : "") })));
    });
    root.appendChild(h("section", { class: "lesson" }, h("h2", { text: "Sources" }), refs));
    return root;
  };

  /* ---------- notes: the deeper scope behind a module ---------- */
  var SKILL_TYPES = { Know: "remember and recognise", Reason: "work something out", Do: "perform the task", Judge: "decide between options" };
  CE.hasDeep = function (key) { return !!(window.COURSE_DEEP && window.COURSE_DEEP[key] && COURSE[key]); };
  CE.deep = function (m, nb) {
    var c = COURSE[m.key], d = (window.COURSE_DEEP || {})[m.key], nums = refNums(c), Lc = CE.lecturer(m.key);
    var root = h("article", { class: "notes deep" });
    function sec(title, hint) { var s = h("details", { class: "dsec ddrop dbody" }, h("summary", { text: title })); if (hint) s.appendChild(h("p", { class: "dhint", text: hint })); root.appendChild(s); return s; }

    root.appendChild(h("header", { class: "dhead" },
      h("span", { class: "mono lec-k", text: "Author's notes" }),
      h("h2", { text: "Behind this module" }),
      h("p", { class: "lead", text: "This is the reasoning behind the module: why it sits where it does, what it trains, who shaped it and how it teaches. None of it is needed to pass." }),
      h("button", { class: "btn ghost sm dall", type: "button", text: "Expand all", onclick: function (ev) {
        var ds = root.querySelectorAll("details"), any = false, i;
        for (i = 0; i < ds.length; i++) if (!ds[i].open) { any = true; break; }
        for (i = 0; i < ds.length; i++) ds[i].open = any;
        ev.currentTarget.textContent = any ? "Collapse all" : "Expand all";
      } })));

    var s1 = sec("Why it sits here");
    s1.appendChild(h("p", { text: d.place }));
    if (nb && (nb.prev || nb.next)) {
      var path = h("p", { class: "dpath mono" });
      path.appendChild(document.createTextNode((nb.prev ? nb.prev.title : "Start") + "  →  "));
      path.appendChild(h("strong", { text: m.title }));
      path.appendChild(document.createTextNode("  →  " + (nb.next ? nb.next.title : "End of the course")));
      s1.appendChild(path);
    }

    var s2 = sec("Skills you are practising", "Each skill is tagged by the kind of thinking it asks for.");
    var tally = {}, ul = h("ul", { class: "dskills" });
    d.skills.forEach(function (sk) {
      tally[sk[0]] = (tally[sk[0]] || 0) + 1;
      ul.appendChild(h("li", {}, h("span", { class: "dtag dtag-" + sk[0].toLowerCase(), title: SKILL_TYPES[sk[0]] || "", text: sk[0] }), h("span", { text: sk[1] })));
    });
    s2.appendChild(ul);
    s2.appendChild(h("p", { class: "dhint", text: Object.keys(SKILL_TYPES).map(function (k) { return k + ": " + SKILL_TYPES[k]; }).join(" · ") }));

    var s3 = sec("What changes for you");
    s3.appendChild(h("p", { text: d.benefit }));
    if (d.stumble) { s3.appendChild(h("p", { class: "dnote" }, h("strong", { text: "The usual stumble. " }), document.createTextNode(d.stumble))); }
    if (d.connects) { s3.appendChild(h("p", { class: "dnote" }, h("strong", { text: "How it connects. " }), document.createTextNode(d.connects))); }

    var lm = sec("Lesson by lesson", "What each lesson is made of, so you can see where the time goes.");
    var lul = h("ol", { class: "dlessons" });
    c.lessons.forEach(function (L) {
      var ex = [], nc = 0, na = 0;
      L.blocks.forEach(function (b) { if (b.t === "example") ex.push(b.title); else if (b.t === "check") nc++; else if (b.t === "activity") na++; });
      var li = h("li", {}, h("strong", { text: L.title }), h("span", { class: "dmeta mono", text: " " + (L.min || 0) + " min · " + ex.length + " worked example" + (ex.length === 1 ? "" : "s") + " · " + nc + " check" + (nc === 1 ? "" : "s") + (na ? " · " + na + " activit" + (na === 1 ? "y" : "ies") : "") }));
      if (ex.length) li.appendChild(h("span", { class: "dex", text: ex.slice(0, 3).map(function (t) { return t.replace(/^Worked example:\s*/i, ""); }).join("; ") + (ex.length > 3 ? "; and " + (ex.length - 3) + " more" : "") }));
      lul.appendChild(li);
    });
    lm.appendChild(lul);

    var tk = [], lim = [];
    c.lessons.forEach(function (L) { L.blocks.forEach(function (b) {
      if (b.t === "terms") b.i.forEach(function (t) { tk.push(t[0]); });
      else if (b.t === "callout" && b.k === "warn") lim.push(b.x);
    }); });
    if (tk.length) {
      var kt = sec("Key terms you will meet");
      var chips = h("p", { class: "dchips" });
      tk.forEach(function (t) { chips.appendChild(h("span", { class: "dchip", text: t })); });
      kt.appendChild(chips);
    }
    if (lim.length) {
      var ls = sec("Where the advice stops", "The warnings the module itself raises, so you know the limits before you lean on it.");
      var lw = h("ul", { class: "dwarn" });
      lim.slice(0, 4).forEach(function (x) { lw.appendChild(rp("li", x, nums)); });
      ls.appendChild(lw);
      if (lim.length > 4) ls.appendChild(h("p", { class: "dhint", text: lim.length - 4 + " more warnings sit in the lessons." }));
    }

    var s4 = h("div", { class: "ddrop-b" });
    root.appendChild(h("details", { class: "dsec ddrop" }, h("summary", { text: "Influences" }), h("p", { class: "dhint", text: "The voice that shaped the module, and the sources it cites, with a line on what each added." }), s4));
    function clean(t) { return String(t).replace(/\s*\{\{[^}]+\}\}/g, "").replace(/\*\*/g, "").replace(/`/g, "").trim(); }
    function clip(t, n) { t = clean(t); if (t.length <= n) return t; t = t.slice(0, n); return t.slice(0, t.lastIndexOf(" ")).replace(/[,;:\s]+$/, "") + "…"; }
    if (Lc) {
      var lens = /Lecturer lens:\s*([\s\S]+)$/.exec(clean(c.intro)), meth = null;
      c.outcomes.forEach(function (o) { var q = /^Lecturer's method:\s*(.+)$/.exec(o); if (q) meth = q[1]; });
      var lb = h("details", { class: "dinf" }, h("summary", { text: Lc.name + " (" + Lc.years + "), lecturer" }));
      lb.appendChild(h("p", { text: Lc.why }));
      if (lens) lb.appendChild(h("p", { class: "dadd" }, h("em", { text: "What they added: " }), document.createTextNode(lens[1])));
      if (meth) lb.appendChild(h("p", { class: "dadd" }, h("em", { text: "Their method, in practice: " }), document.createTextNode(meth)));
      s4.appendChild(lb);
    }
    var cnt = {}, js = JSON.stringify([c.intro, c.outcomes, c.lessons]), re = /\{\{([a-z0-9-]+)\}\}/g, mm;
    while ((mm = re.exec(js)) !== null) if (REFS[mm[1]]) cnt[mm[1]] = (cnt[mm[1]] || 0) + 1;
    var keys = Object.keys(cnt).sort(function (a, b) { return nums[a] - nums[b]; });
    var HOSTS = { "wikipedia.org": "Wikipedia", "britannica.com": "Encyclopaedia Britannica", "libretexts.org": "LibreTexts open textbooks", "legislation.gov.uk": "UK legislation", "gov.uk": "GOV.UK and UK agencies", "nhs.uk": "NHS", "who.int": "World Health Organization", "cdc.gov": "US CDC", "fca.org.uk": "Financial Conduct Authority", "moneyhelper.org.uk": "MoneyHelper", "ico.org.uk": "Information Commissioner's Office", "archive.org": "Internet Archive", "consensus.app": "Research papers", "ncbi.nlm.nih.gov": "Research papers", "europepmc.org": "Research papers", "bmj.com": "Research papers", "springer.com": "Research papers", "numdam.org": "Research papers", "openstax.org": "OpenStax open textbooks", "usda.gov": "US Department of Agriculture", "fsai.ie": "Food Safety Authority of Ireland", "citizensinformation.ie": "Irish government information", "dataprotection.ie": "Irish government information", "businesscompanion.info": "Business Companion (Trading Standards)", "ebay.co.uk": "Selling platforms", "vinted.co.uk": "Selling platforms", "etsy.com": "Selling platforms", "gutenberg.org": "Public-domain texts and archives", "wikisource.org": "Public-domain texts and archives", "ibiblio.org": "Public-domain texts and archives", "thefreelibrary.com": "Public-domain texts and archives", "gilderlehrman.org": "Public-domain texts and archives", "founders.archives.gov": "Public-domain texts and archives", "jstor.org": "Research papers", "psycnet.apa.org": "Research papers", "semanticscholar.org": "Research papers", "thelancet.com": "Research papers", "ovid.com": "Research papers", "cambridge.org": "Research papers", "worldcat.org": "Library catalogues", "docs.google.com": "Shared documents", "sites.google.com": "Shared documents", "pressbooks.pub": "Open textbooks (Pressbooks)", "ecampusontario.pressbooks.pub": "Open textbooks (Pressbooks)", "ordnancesurvey.co.uk": "Ordnance Survey", "winstonchurchill.org": "Churchill archives", "churchillarchive.com": "Churchill archives", "lnt.org": "Leave No Trace", "leavenotraceireland.org": "Leave No Trace", "encyclopedia.com": "Encyclopaedias", "thebmc.co.uk": "Mountaineering bodies", "mountain.rescue.org.uk": "Mountaineering bodies", "rei.com": "Outdoor retailers" };
    function grp(r) {
      if (r.b) return { k: "b:" + r.b, label: "Book: " + String(r.s || r.b).replace(/,?\s*copy supplied.*$/, "").replace(/\s*\(.*$/, "").slice(0, 110), book: true };
      var host = ""; try { host = new URL(r.u).hostname.replace(/^www\./, ""); } catch (e) { return { k: "o", label: "Other websites" }; }
      var parts = host.split("."), best = null;
      for (var i = 0; i < parts.length - 1; i++) { var h2 = parts.slice(i).join("."); if (HOSTS[h2]) { best = HOSTS[h2]; break; } }
      if (!best && (/(^|\.)(edu|ac\.uk)$/.test(host) || /extension|ces\.|ucanr|uaf\.edu|rucore|mgnv|uconn/.test(host))) best = "University extension and college guides";
      return best ? { k: "h:" + best, label: best } : { k: "o", label: "Other websites" };
    }
    var use = {};
    function note(k, li, kind, txt) {
      var u3 = use[k] = use[k] || { les: [], eg: [], tab: [] };
      if (u3.les.indexOf(li + 1) < 0) u3.les.push(li + 1);
      if (kind === "table") { if (txt && u3.tab.indexOf(txt) < 0) u3.tab.push(txt); return; }
      if (clean(txt).length > 40 && u3.eg.length < 40 && !u3.eg.some(function (e) { return e.t === clip(txt, 220); })) u3.eg.push({ l: li + 1, t: clip(txt, 220) });
    }
    function scan(txt, li, kind) {
      var r2 = /\{\{([a-z0-9-]+)\}\}/g, q;
      sentences(txt).forEach(function (sn) { r2.lastIndex = 0; while ((q = r2.exec(sn)) !== null) note(q[1], li, kind, sn); });
    }
    c.lessons.forEach(function (L, li) {
      L.blocks.forEach(function (b) {
        if (b.t === "p" || b.t === "callout") scan(b.x, li, "text");
        else if (b.t === "ul" || b.t === "ol") b.i.forEach(function (x) { scan(x, li, "text"); });
        else if (b.t === "example") b.steps.forEach(function (x) { scan(x, li, "text"); });
        else if (b.t === "check") scan(b.w || "", li, "text");
        else if (b.t === "table" && b.src) { var r3 = /\{\{([a-z0-9-]+)\}\}/g, q3; while ((q3 = r3.exec(b.src)) !== null) note(q3[1], li, "table", b.title || "a table"); }
      });
    });
    if (keys.length) {
      var groups = [], gmap = {};
      keys.forEach(function (k) { var g = grp(REFS[k]); if (!gmap[g.k]) { gmap[g.k] = { label: g.label, book: !!g.book, keys: [] }; groups.push(gmap[g.k]); } gmap[g.k].keys.push(k); });
      groups.sort(function (x, y) { return (y.book ? 1 : 0) - (x.book ? 1 : 0); });
      groups.forEach(function (G) {
      var rl = h("div", { class: "dsrc" }), tabs = h("div", { class: "dtabs", role: "tablist" }), panels = [], btns = [];
      var gd = h("details", { class: "dgd" }, h("summary", { text: G.label + " (" + G.keys.length + ")" }), tabs, rl);
      s4.appendChild(gd);
      G.keys.forEach(function (k, ki) {
        var r = REFS[k];
        var u2 = use[k], li = h("div", { class: "dpanel", role: "tabpanel" }, h("p", { class: "dtitle", text: nums[k] + ". " + r.t }));
        var shortT = String(r.t).split(/[:(]/)[0].trim(); if (shortT.length > 30) shortT = shortT.slice(0, 30).replace(/\s+\S*$/, "") + "…";
        var btn = h("button", { type: "button", role: "tab", class: "dtab", "aria-selected": String(ki === 0), title: r.t, text: nums[k] + ". " + shortT });
        li.hidden = ki !== 0; btns.push(btn); panels.push(li);
        btn.addEventListener("click", function () { btns.forEach(function (b, bi) { b.setAttribute("aria-selected", String(b === btn)); panels[bi].hidden = b !== btn; }); });
        tabs.appendChild(btn);
        li.appendChild(h("p", { class: "refs-s", text: r.s + ". Cited " + cnt[k] + (cnt[k] === 1 ? " time" : " times") + (u2 && u2.les.length ? ", in lesson" + (u2.les.length === 1 ? " " : "s ") + u2.les.join(", ") : "") + "." }));
        if (u2 && u2.eg.length) {
          var pick = [], seen = {};
          u2.eg.forEach(function (e) { if (!seen[e.l] && pick.length < 5) { seen[e.l] = 1; pick.push(e); } });
          u2.eg.forEach(function (e) { if (pick.length < 5 && pick.indexOf(e) < 0) pick.push(e); });
          pick.sort(function (x, y) { return x.l - y.l; });
          u2 = { les: u2.les, eg: pick, tab: u2.tab };
        }
        if (u2 && (u2.eg.length || u2.tab.length)) {
          var ad = h("div", { class: "dadd" }, h("em", { text: "What it added" }));
          if (u2.eg.length) { var al = h("ul", { class: "dadd-l" }); u2.eg.forEach(function (e) { al.appendChild(h("li", {}, h("span", { class: "mono dadd-n", text: "Lesson " + e.l }), document.createTextNode(" " + e.t))); }); ad.appendChild(al); }
          if (u2.tab.length) ad.appendChild(h("p", { class: "dadd-t", text: "Also behind " + (u2.tab.length === 1 ? "a table: " : u2.tab.length + " tables: ") + u2.tab.slice(0, 3).join("; ") + (u2.tab.length > 3 ? "; and more" : "") + "." }));
          li.appendChild(ad);
        }
        li.appendChild(h("p", { class: "dadd" }, h("a", { href: refHref(r), target: "_blank", rel: "noopener noreferrer", text: safeUrl(r.u) ? "Open the source" : "Search for this source" })));
        rl.appendChild(li);
      });
      });
      s4.appendChild(h("p", { class: "dhint", text: "All " + keys.length + " source" + (keys.length === 1 ? "" : "s") + " the module cites, grouped by where they come from, numbered as in the lessons." }));
    }

    var s5 = sec("How it teaches");
    s5.appendChild(h("p", { text: d.style }));
    var tt = { lessons: c.lessons.length, min: 0, example: 0, check: 0, activity: 0, visual: 0, video: 0 };
    c.lessons.forEach(function (L) {
      tt.min += L.min || 0;
      L.blocks.forEach(function (b) {
        if (b.t === "example") tt.example++; else if (b.t === "check") tt.check++; else if (b.t === "activity") tt.activity++;
        else if (b.t === "table" || b.t === "fig") tt.visual++; else if (b.t === "video") tt.video++;
      });
    });
    var rows = [["Worked examples", tt.example, "see it done before you try"], ["Checks", tt.check, "answer, then get feedback"], ["Activities", tt.activity, "do it on your own material"], ["Tables and diagrams", tt.visual, "compare and see the structure"]];
    if (tt.video) rows.push(["Videos", tt.video, "watch it demonstrated"]);
    var peak = Math.max.apply(null, rows.map(function (r) { return r[1]; })) || 1, mix = h("div", { class: "dmix" });
    rows.forEach(function (r) {
      mix.appendChild(h("div", { class: "dmix-r" }, h("span", { class: "dmix-l", text: r[0] }),
        h("span", { class: "dmix-b" }, h("i", { style: "width:" + Math.round(r[1] / peak * 100) + "%" })),
        h("span", { class: "dmix-n mono", text: String(r[1]) }), h("span", { class: "dmix-w", text: r[2] })));
    });
    s5.appendChild(mix);
    s5.appendChild(h("p", { class: "dhint", text: tt.lessons + " lessons, about " + tt.min + " minutes of study. Counts come from the lesson files, so they stay true when the module changes." }));

    return root;
  };

  /* ---------- slide builder ---------- */
  CE.has = function (key) { return !!COURSE[key]; };
  CE.build = function (m, libLabel) {
    var c = COURSE[m.key];
    if (!c) return null;
    var nums = refNums(c), slides = [], sections = [], isCap = m.kind === "capstone";
    slides.push({ kind: "title", h: m.title, sub: libLabel + " · " + (isCap ? "Capstone" : "Module " + m.number) + " · " + m.hours, belt: m.belt || "" });

    function pushBullets(head, pts, lab, note) {
      var chunk = [], words = 0, parts = [];
      pts.forEach(function (p) {
        var w = wordCount(p);
        if (chunk.length && (words + w > 70 || chunk.length >= 4)) { parts.push(chunk); chunk = []; words = 0; }
        chunk.push(p); words += w;
      });
      if (chunk.length) parts.push(chunk);
      parts.forEach(function (pp, i) {
        slides.push({ kind: "bullets", h: i ? head + " (continued)" : head, pts: pp, note: i === parts.length - 1 ? note : null, lesson: lab, nums: nums });
      });
    }

    var Lc = CE.lecturer(m.key);
    if (Lc) slides.push({ kind: "lecturer", lec: Lc, lesson: "Your lecturer" });
    pushBullets("Why this module matters", sentences(c.intro), "Introduction", null);
    slides.push({ kind: "bullets", h: "By the end of this module you will be able to", pts: c.outcomes, lesson: "Introduction", nums: nums });
    slides.push({ kind: "outline", h: "Roadmap", items: c.lessons.map(function (L, i) { return { n: i + 1, title: L.title, min: L.min }; }), lesson: "Introduction" });

    c.lessons.forEach(function (L, li) {
      var lab = "Lesson " + (li + 1) + " · " + L.title, curH = L.title, pend = [], note = null;
      var heads = L.blocks.filter(function (b) { return b.t === "h"; }).map(function (b) { return b.x; });
      sections.push({ title: L.title, at: slides.length });
      slides.push({ kind: "section", n: li + 1, title: L.title, min: L.min, heads: heads, lesson: lab });
      var lnT = CE.lnote(m.key, li);
      if (lnT && Lc) slides.push({ kind: "lecnote", lec: Lc, text: lnT, lesson: lab });
      function flush() {
        if (pend.length) pushBullets(curH, pend, lab, note);
        else if (note) slides.push({ kind: "callout", h: curH, k: note.k, x: note.x, lesson: lab, nums: nums });
        pend = []; note = null;
      }
      L.blocks.forEach(function (b) {
        if (b.t === "h") { flush(); curH = b.x; }
        else if (b.t === "p") { sentences(b.x).forEach(function (s) { pend.push(s); }); }
        else if (b.t === "ul" || b.t === "ol") { b.i.forEach(function (s) { pend.push(s); }); }
        else if (b.t === "callout") { if (note) flush(); note = b; }
        else {
          flush();
          if (b.t === "table") slides.push({ kind: "table", h: b.title || curH, head: b.head, rows: b.rows, src: b.src, lesson: lab, nums: nums });
          else if (b.t === "fig") slides.push({ kind: "fig", h: b.title || curH, id: b.id, cap: b.cap, lesson: lab });
          else if (b.t === "example") {
            for (var i = 0; i < b.steps.length; i += 5) slides.push({ kind: "example", h: i ? b.title + " (continued)" : b.title, title: "Step by step", steps: b.steps.slice(i, i + 5), lesson: lab, nums: nums, start: i });
          }
          else if (b.t === "check") slides.push({ kind: "check", h: "Check your understanding", q: b.q, o: b.o, a: b.a, w: b.w, lesson: lab, nums: nums, prefix: m.key });
          else if (b.t === "video") slides.push({ kind: "video", h: "Watch", video: b, lesson: lab });
          else if (b.t === "terms") { for (var j = 0; j < b.i.length; j += 6) slides.push({ kind: "terms", h: j ? "Key terms (continued)" : "Key terms", items: b.i.slice(j, j + 6), lesson: lab, nums: nums }); }
          else if (b.t === "activity") slides.push({ kind: "activity", h: "Activity", x: b.x, lesson: lab, nums: nums });
          else if (b.t === "take") slides.push({ kind: "take", h: "Key takeaways", items: b.i, lesson: lab, nums: nums });
        }
      });
      flush();
    });

    slides.push({ kind: "next", h: "What to do next", lesson: "Finish", mod: m });
    var order = Object.keys(nums).sort(function (a, b) { return nums[a] - nums[b]; });
    for (var k = 0; k < order.length; k += 5) {
      slides.push({ kind: "refs", h: k ? "Sources (continued)" : "Sources", items: order.slice(k, k + 5).map(function (key) { return { n: nums[key], r: REFS[key] }; }), lesson: "Finish" });
    }
    return { slides: slides, sections: sections };
  };

  /* ---------- slide drawing ---------- */
  CE.wrap = function (el) {
    if (el.children.length === 1 && el.firstElementChild.classList.contains("sin")) return;
    var inner = h("div", { class: "sin" });
    while (el.firstChild) inner.appendChild(el.firstChild);
    el.appendChild(inner);
  };
  /* Shrink a slide's type step by step until nothing overflows its frame. */
  CE.fit = function (el) {
    if (!el) return;
    el.style.setProperty("--sz", "1");
    if (!el.clientHeight) return;
    function over() {
      if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) return true;
      var ts = el.querySelectorAll(".tscroll");
      for (var i = 0; i < ts.length; i++) if (ts[i].scrollWidth > ts[i].clientWidth + 1) return true;
      return false;
    }
    var z = 1, n = 0;
    while (n < 20 && z > 0.42 && over()) { z -= 0.04; el.style.setProperty("--sz", z.toFixed(2)); n++; }
  };
  function fitNearest(node) { var sl = node && node.closest && node.closest(".slide"); if (sl) CE.fit(sl); }

  var rawDraw;
  CE.drawSlide = function (s, el, ctx) {
    var handled = rawDraw(s, el, ctx);
    if (handled) CE.wrap(el);
    return handled;
  };
  rawDraw = function (s, el, ctx) {
    var kinds = ["section", "outline", "bullets", "table", "fig", "example", "check", "video", "terms", "activity", "take", "refs", "callout", "next", "lecturer", "lecnote"];
    if (kinds.indexOf(s.kind) < 0) return false;
    el.textContent = ""; el.className = "slide k-" + s.kind;
    var nums = s.nums || {};
    if (s.lesson && s.kind !== "section") el.appendChild(h("span", { class: "eyebrow", text: s.lesson }));
    if (s.kind === "section") {
      el.appendChild(h("span", { class: "eyebrow", text: "Lesson " + s.n + " · about " + s.min + " minutes" }));
      el.appendChild(h("h1", { text: s.title }));
      if (s.heads && s.heads.length) {
        el.appendChild(h("p", { class: "lead", text: "In this lesson" }));
        el.appendChild(drawList(s.heads, false, nums));
      }
      return true;
    }
    if (s.kind === "lecturer") {
      el.appendChild(h("h2", { text: s.lec.name + " (" + s.lec.years + ")" }));
      el.appendChild(h("p", { class: "lead", text: s.lec.known + ". " + s.lec.why }));
      el.appendChild(h("blockquote", { class: "lec-q", text: s.lec.welcome }));
      var MM = (window.COURSE_METHODS || {})[s.lec.name];
      if (MM && MM.length) { el.appendChild(h("p", { class: "lead", text: "Documented method" })); var ml = h("ul", {}); MM.forEach(function (x) { ml.appendChild(h("li", { text: x })); }); el.appendChild(ml); }
      el.appendChild(h("p", { class: "mono lec-note", text: "Simulated voice written for teaching. Not a real quotation." }));
      return true;
    }
    if (s.kind === "lecnote") {
      el.appendChild(h("h2", { text: "Lecturer's note: " + s.lec.name }));
      el.appendChild(h("blockquote", { class: "lec-q", text: s.text }));
      el.appendChild(h("p", { class: "mono lec-note", text: "Simulated voice written for teaching. Not a real quotation." }));
      return true;
    }
    if (s.kind === "outline") {
      el.appendChild(h("h2", { text: s.h }));
      var ol = h("ol", { class: "road" });
      s.items.forEach(function (it) { ol.appendChild(h("li", {}, h("strong", { text: it.title }), h("span", { class: "mono", text: "  " + it.min + " min" }))); });
      el.appendChild(ol);
      return true;
    }
    if (s.kind === "refs") {
      el.appendChild(h("h2", { text: s.h }));
      var rl = h("ol", { class: "refs", start: String(s.items[0].n) });
      s.items.forEach(function (it) {
        rl.appendChild(h("li", {}, h("a", { href: refHref(it.r), target: "_blank", rel: "noopener noreferrer", title: refTitle(it.r), text: it.r.t }), h("span", { class: "refs-s", text: " " + it.r.s + (it.r.p ? ", " + it.r.p : "") + (it.r.d ? ". Checked " + it.r.d : "") })));
      });
      el.appendChild(rl);
      return true;
    }
    if (s.kind === "next") {
      el.appendChild(h("h2", { text: s.h }));
      el.appendChild(drawList(["Work the challenges in Practice, and tick each one as you pass its self-check.", "Take the quiz without looking back at the slides.", "Use the Tools tab for the calculations in this module.", "Log your own measurements in the Ledger so the data builds up."], false, nums));
      var row = h("div", { class: "row" });
      [["practice", "Go to Practice"], ["quiz", "Take the quiz"], ["tools", "Open Tools"], ["notes", "Read the notes"]].forEach(function (t) {
        row.appendChild(h("button", { class: t[0] === "practice" ? "btn" : "btn ghost", type: "button", text: t[1], onclick: function () { if (ctx && ctx.goTab) ctx.goTab(t[0]); } }));
      });
      el.appendChild(row);
      return true;
    }
    el.appendChild(h("h2", { text: s.h }));
    if (s.kind === "bullets") {
      el.appendChild(drawList(s.pts, false, nums));
      if (s.note) el.appendChild(drawCallout(s.note, nums));
    } else if (s.kind === "callout") {
      el.appendChild(drawCallout({ k: s.k, x: s.x }, nums));
    } else if (s.kind === "table") {
      el.appendChild(drawTable(s, nums));
    } else if (s.kind === "fig") {
      el.appendChild(figure(s.id, s.cap));
    } else if (s.kind === "example") {
      var l = h("ol", { class: "steps", start: String((s.start || 0) + 1) });
      s.steps.forEach(function (x) { l.appendChild(rp("li", x, nums)); });
      el.appendChild(h("div", { class: "ex" }, h("div", { class: "ex-t", text: s.title }), l));
    } else if (s.kind === "check") {
      el.appendChild(drawCheck(s, { nums: nums, prefix: s.prefix }));
    } else if (s.kind === "video") {
      el.appendChild(drawVideo(s.video));
    } else if (s.kind === "terms") {
      el.appendChild(drawTerms(s.items, nums));
    } else if (s.kind === "activity") {
      el.appendChild(drawActivity(s.x, nums));
    } else if (s.kind === "take") {
      el.appendChild(drawTake(s.items, nums));
    }
    return true;
  };
})();
