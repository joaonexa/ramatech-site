// Ramatech — comportamento do site
(function () {
  'use strict';

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em um link
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Sombra no cabeçalho ao rolar
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal ao rolar (seções e cards)
  var revealEls = document.querySelectorAll('.section, .card, .feature, .about, .contact');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Ano atual no rodapé
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Formulário: monta um e-mail (mailto) com a mensagem do visitante
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var nome = data.get('nome') || '';
      var email = data.get('email') || '';
      var telefone = data.get('telefone') || '';
      var mensagem = data.get('mensagem') || '';

      var subject = 'Contato pelo site — ' + nome;
      var body = 'Nome: ' + nome + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefone: ' + telefone + '\n\n' +
        'Mensagem:\n' + mensagem;

      window.location.href = 'mailto:comercial@ramatech.ind.br' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
