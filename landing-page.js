document.addEventListener('DOMContentLoaded', () => {
  
  /* ------------------------------------------------------------
     1. SCROLL DOWN BUTTON LOGIC
     Finds the button, gets the parent section, and scrolls to the next one.
  ------------------------------------------------------------ */
  const scrollButtons = document.querySelectorAll('.scroll-down-btn');

  scrollButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Find the current section (the parent of the clicked button)
      const currentSection = this.closest('.sticky-card');
      
      // Find the immediate next sibling element
      const nextSection = currentSection.nextElementSibling;

      // If a next section exists, scroll to it smoothly
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ------------------------------------------------------------
     2. INTERSECTION OBSERVER FOR ANIMATIONS
     Adds the '.is-visible' class when a card enters the viewport.
  ------------------------------------------------------------ */
  const cards = document.querySelectorAll('.sticky-card');

  const observerOptions = {
    root: null,      // Use the browser viewport as the container
    rootMargin: '0px',
    threshold: 0.2   // Trigger when 20% of the card is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add class to trigger CSS transitions
        entry.target.classList.add('is-visible');
      } else {
        // Optional: Remove this else block if you want animations to run only once
        // entry.target.classList.remove('is-visible'); 
      }
    });
  }, observerOptions);

  // Start observing each card
  cards.forEach(card => {
    observer.observe(card);
  });

});