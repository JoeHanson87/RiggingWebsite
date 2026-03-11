/* ============================================================
   The Rigging Company Ltd — Script
   ============================================================ */

(function () {
  'use strict';

  // ── Dynamic copyright year ──────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ── Navigation scroll opacity ───────────────────────────────
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hamburger / mobile overlay ──────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const overlayLinks = document.querySelectorAll('.mobile-overlay__link');

  function openMenu() {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('is-open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('is-open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (mobileOverlay.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlayLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // ── Smooth scroll for all anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  // ── Hero image slow-zoom on load ────────────────────────────
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add('loaded');
    } else {
      heroImg.addEventListener('load', function () {
        heroImg.classList.add('loaded');
      });
    }
  }

  // ── Intersection Observer — scroll reveal ───────────────────
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Lightbox ────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.gallery__item');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(function (item) {
    const img = item.querySelector('img');
    if (!img) return;

    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View ' + (img.alt || 'image') + ' in fullscreen');

    function handleOpen() {
      openLightbox(img.src, img.alt);
    }

    item.addEventListener('click', handleOpen);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  // ── Subtle hero parallax on scroll ─────────────────────────
  const heroBg = document.querySelector('.hero__img');

  if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = 'translateY(' + scrollY * 0.3 + 'px) scale(1.05)';
      }
    }, { passive: true });
  }

})();
