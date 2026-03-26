/* ================================================================
   Dinesh Kannan – Portfolio main.js
   ================================================================ */
(function () {
    'use strict';

    /* Mobile nav toggle */
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* Active nav link on scroll */
    var sections = document.querySelectorAll('main section[id]');
    var anchors  = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActive() {
        var y = window.scrollY + 80;
        sections.forEach(function (s) {
            var inView = y >= s.offsetTop && y < s.offsetTop + s.offsetHeight;
            anchors.forEach(function (a) {
                if (a.getAttribute('href') === '#' + s.id) {
                    a.classList.toggle('active', inView);
                }
            });
        });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
})();
