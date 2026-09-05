window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const eyebrow = document.getElementById('eyebrow');
  const titles = ['Digital Humanist', 'Applied Ontologist', 'Knowledge Engineer'];
  if (eyebrow) {
    let i = 0;
    setInterval(() => {
      i = (i + 1) % titles.length;
      eyebrow.style.opacity = '0';
      setTimeout(() => {
        eyebrow.textContent = titles[i];
        eyebrow.style.opacity = '1';
      }, 400);
    }, 12000);
  }
});
