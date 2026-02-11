const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = form.querySelector('button');
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = 'Demande envoyée ✓';
    button.disabled = true;

    setTimeout(() => {
      form.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}
