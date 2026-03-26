/* ================================================================
   Dinesh Kannan · Personal Portfolio – main.js
   ================================================================ */

(function () {
  'use strict';

  /* ── Nav mobile toggle ──────────────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close on any link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav link on scroll ──────────────────────────────── */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ── Scroll-reveal for timeline cards & project cards ──────── */
  var observer;
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent =
      '.reveal { opacity: 0; transform: translateY(24px); transition: opacity .5s ease, transform .5s ease; }' +
      '.reveal.visible { opacity: 1; transform: none; }';
    document.head.appendChild(style);

    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(
      '.timeline-card, .project-card, .stat-card, .edu-card, .pub-card, .skills-group'
    ).forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

})();
