
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
  });
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.feature').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.transition = 'all 0.6s ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });
});
