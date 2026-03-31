document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Lightbox: create if missing
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><img class="lb-image" alt=""/><p class="lb-credit"></p>';
    document.body.appendChild(lb);
  }

  const lbImage = lb.querySelector('.lb-image');
  const lbCredit = lb.querySelector('.lb-credit');
  const lbClose = lb.querySelector('.lb-close');

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a.lightbox-trigger');
    if (a) {
      e.preventDefault();
      lbImage.src = a.href;
      lbImage.alt = a.getAttribute('data-alt') || '';
      lbCredit.innerHTML = a.getAttribute('data-credit') || '';
      lb.classList.add('active');
      return;
    }
    if (e.target === lb || e.target === lbClose) {
      lb.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lb.classList.remove('active');
  });
});

// Respect prefers-reduced-motion: don't animate if user prefers reduced motion
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
}
