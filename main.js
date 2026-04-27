/* ===========================
   SCOMP · DAMC-UJAT
   main.js
   =========================== */

// Cursor personalizado
(function initCursor() {
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('ring');
  if (!cur || !ring) return;

  document.addEventListener('mousemove', function(e) {
    cur.style.left  = e.clientX + 'px';
    cur.style.top   = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });
})();

// Scroll reveal con IntersectionObserver
(function initReveal() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function(el, i) {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    obs.observe(el);
  });
})();
