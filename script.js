(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
})();
