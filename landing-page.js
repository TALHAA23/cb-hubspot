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


const form = document.getElementById('leadForm');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const data = new URLSearchParams();
  data.append('firstname', form.firstname.value);
  data.append('lastname', form.lastname.value);
  data.append('email', form.email.value);
  data.append('phone', form.phone.value);
  data.append('unit_interest', form.unit_interest.value);

  const res = await fetch('https://forms.hubspot.com/uploads/form/v2/39561244/YOUR_FORM_ID', {
    method: 'POST',
    body: data
  });

  if (res.ok) alert('Lead submitted successfully!');
  else alert('Submission failed!');
});
