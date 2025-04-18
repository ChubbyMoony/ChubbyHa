// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add loaded class to body when everything is ready
  document.body.classList.add('loaded');

  // Get all card elements
  const cards = document.querySelectorAll('.card');

  // Add event listeners to each card
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.setAttribute('aria-expanded', 'true');
    });

    card.addEventListener('mouseleave', function() {
      this.setAttribute('aria-expanded', 'false');
    });

    // Add click effect
    card.addEventListener('click', function(e) {
      // Create ripple element
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      // Position the ripple
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set ripple position
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Add ripple to card
      card.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Initial check on page load
  const elements = document.querySelectorAll('.card, .profile, .social-icons');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('in-view');
    }
  });

  // Check on scroll
  window.addEventListener('scroll', function() {
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('in-view');
      }
    });
  });
});
