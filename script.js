// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll reveal animations (simplified)
  window.addEventListener('scroll', reveal);
  
  function reveal() {
    const reveals = document.querySelectorAll('.card, .product-card, .testimonial-card');
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        reveal.classList.add('active');
      }
    });
  }
  