/* Written by _template/kit.py meta. Do not edit: add or remove files in courses/<id>/meta/ and run kit.py meta.
   LOA_META(kind) writes one <script> per course that has courses/<id>/meta/<kind>.js, carrying this file's ?v= tag. */
window.LOA_META_FILES = {
 "about": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "investing",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "deepnotes": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "investing",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "lecturer-notes": [
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "lecturer-intro": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "investing",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "lecturers": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "investing",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "faqs": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "greenhouse-year",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "dossiers": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "cinematography",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ],
 "oversight": [
  "africa-post-colonial",
  "africa-pre-colonial",
  "camping-basics",
  "directing",
  "greenhouse-year",
  "grid-down-food",
  "investing",
  "personal-training",
  "public-speaking",
  "sales-basics",
  "vintage-reselling"
 ]
};
(function () {
  var s = document.currentScript, v = ((s && s.src.match(/\?v=[^&#]+/)) || [""])[0];
  window.LOA_META = function (kind) {
    (window.LOA_META_FILES[kind] || []).forEach(function (id) {
      document.write('<script src="courses/' + id + '/meta/' + kind + '.js' + v + '"><\/script>');
    });
  };
})();
