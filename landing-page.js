document.addEventListener('DOMContentLoaded', () => {

  const scrollButtons = document.querySelectorAll('.scroll-down-btn');

  scrollButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const currentSection = this.closest('.sticky-card');
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  const cards = document.querySelectorAll('.sticky-card');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });

});