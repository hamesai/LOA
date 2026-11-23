const P = require("../../../_template/course_patch.js");
const fixes = [
 ["africa-pre-colonial-1","A tour guide tells you a founding legend","Test it against independent evidence"],
 ["africa-pre-colonial-1","A student finds the Yoruba word itan","Name the genre and teller first"],
 ["africa-pre-colonial-1","A chapter states that the Ethiopic script","One author's inference, weaker than the dated papers"],
 ["africa-pre-colonial-3","An inscription calls a woman malika","Perhaps an office of her own"],
 ["africa-pre-colonial-6","Two groups in Imerina tell different","Test each version's purpose and evidence"],
 ["africa-pre-colonial-8","A museum label says a Chinese fleet","A possibility to test against finds"],
];
for (const [mod,q,opt] of fixes){
  const m=P.load("africa-pre-colonial",mod); let n=0;
  for(const l of m.obj.lessons) for(const b of l.blocks||[]) if(b.t==="check"&&b.q.startsWith(q)){b.o[b.a]=opt;n++;
    const L=Math.max(...b.o.map((x,i)=>i===b.a?0:x.length)); console.log(mod,opt.length,"vs",L);}
  if(n!==1) throw new Error("not found "+q);
  P.save(m);
}
