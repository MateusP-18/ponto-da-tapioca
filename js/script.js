(function () {
  'use strict';

  /* ======================================================================
     CONFIGURAÇÃO — edite aqui as informações reais do negócio
     ====================================================================== */
  var CONFIG = {
    // Número de WhatsApp com código do país (55) + DDD + número, só dígitos.
    // Ex.: (88) 9 9123-4567  ->  "5588991234567"
    whatsappNumber: '5588900000000'
  };

  /* ======================================================================
     Ano no rodapé
     ====================================================================== */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ======================================================================
     Header: sombra ao rolar
     ====================================================================== */
  var header = document.querySelector('.site-header');
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  document.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ======================================================================
     Header: troca para degradê rosa → caramelo depois que a Hero passa
     (o header fica branco apenas enquanto a Hero está visível)
     ====================================================================== */
  var heroSection = document.querySelector('.hero');
  if (header && heroSection && 'IntersectionObserver' in window) {
    var headerHeight = header.offsetHeight || 72;
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle('past-hero', !entry.isIntersecting);
        });
      },
      { rootMargin: '-' + headerHeight + 'px 0px 0px 0px', threshold: 0 }
    );
    heroObserver.observe(heroSection);
  }

  /* ======================================================================
     Menu mobile
     ====================================================================== */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ======================================================================
     Links de WhatsApp — montados a partir do CONFIG acima
     ====================================================================== */
  document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
    var message = el.getAttribute('data-message') || 'Olá! Gostaria de fazer um pedido.';
    var url = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(message);
    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* ======================================================================
     Fade-in ao aparecer na tela
     ====================================================================== */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ======================================================================
     Parallax suave na Hero (desativado se o usuário prefere menos movimento)
     ====================================================================== */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg && !prefersReducedMotion) {
    document.addEventListener('scroll', function () {
      var offset = Math.min(window.scrollY * 0.18, 60);
      heroBg.style.transform = 'translateY(' + offset + 'px)';
    }, { passive: true });
  }
})();
