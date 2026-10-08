document.addEventListener('DOMContentLoaded', () => {
  // Asegurar la reproducción automática continua del video en móviles/escritorio
  const video = document.querySelector('.hero-video');
  if (video) {
    video.muted = true;
    video.loop = true;
    video.play().catch(error => {
      console.log('Autoplay bloqueado por el navegador:', error);
    });
  }

  // Animación de aparición gradual (Fade-in) para las tarjetas al hacer scroll
  const cards = document.querySelectorAll('.card, .hero-image-container');

  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
});