/* ============================================================
   SHARED COMPONENTS — injected at runtime for static site
   ============================================================ */

(function () {
  /* ── NAV ── */
  function buildNav(activePage) {
    return `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav__inner">
    <a class="nav__brand" href="index.html">
      Digital<span>Mfg</span> Blog
    </a>
    <div class="nav__links">
      <a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a>
      <a href="posts/week1.html" ${activePage === 'week1' ? 'class="active"' : ''}>Week 1</a>
      <a href="posts/week2.html" ${activePage === 'week2' ? 'class="active"' : ''}>Week 2</a>
      <a href="posts/week3.html" ${activePage === 'week3' ? 'class="active"' : ''}>Week 3</a>
      <a href="posts/week4.html" ${activePage === 'week4' ? 'class="active"' : ''}>Week 4</a>
      <a href="posts/week5.html" ${activePage === 'week5' ? 'class="active"' : ''}>Week 5</a>
      <a href="posts/week6.html" ${activePage === 'week6' ? 'class="active"' : ''}>Week 6</a>
      <a href="posts/week7.html" ${activePage === 'week7' ? 'class="active"' : ''}>Week 7</a>
      <a href="posts/week8.html" ${activePage === 'week8' ? 'class="active"' : ''}>Week 8</a>
      <a href="posts/week9.html" ${activePage === 'week9' ? 'class="active"' : ''}>Week 9</a>
      <a href="about.html" ${activePage === 'about' ? 'class="active"' : ''}>About</a>
    </div>
    <button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>
  <div class="nav__mobile" id="nav-mobile" role="menu">
    <a href="../index.html">Home</a>
    <a href="week1.html">Week 1 — Introduction</a>
    <a href="week2.html">Week 2 — FESTO CP Lab</a>
    <a href="week3.html">Week 3 — 3D Printing</a>
    <a href="week4.html">Week 4 — Metrology</a>
    <a href="week5.html">Week 5 — Process Capability</a>
    <a href="week6.html">Week 6 — Reverse Engineering</a>
    <a href="week7.html">Week 7 — Plant Simulation</a>
    <a href="week8.html">Week 8 — 50,000 Target</a>
    <a href="week9.html">Week 9 — Lessons Learnt</a>
    <a href="../about.html">About</a>
  </div>
</nav>`;
  }

  /* ── FOOTER ── */
  function buildFooter(depth) {
    const prefix = depth === 'root' ? '' : '../';
    return `
<footer class="footer">
  <div class="container">
    <div class="footer__inner">
      <div>
        <div class="footer__brand">Digital<span>Mfg</span> Blog</div>
        <div class="footer__tagline">A reflective learning journal for 6E7V0013 Digital Manufacturing</div>
      </div>
      <div class="footer__info">
        <strong>[Your Name] — Edit in about.html</strong>
        Module: 6E7V0013 Digital Manufacturing<br>
        Manchester Metropolitan University<br>
        Academic Year 2025–26
      </div>
      <div class="footer__divider"></div>
      <div class="footer__bottom">
        <span>© 2026 [Your Name]. All rights reserved.</span>
        <span>MEng / MSc Engineering | Manchester Met</span>
      </div>
    </div>
  </div>
</footer>`;
  }

  window.DMBlog = { buildNav, buildFooter };
})();
