// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. SCROLL-DOWN BUTTON FUNCTIONALITY
    // =========================================
    const scrollBtn = document.getElementById('scroll-btn');
    const aboutSection = document.getElementById('about');

    if (scrollBtn && aboutSection) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        });
    }

    // =========================================
    // 2. INTERSECTION OBSERVER FOR SCROLL REVEAL
    // =========================================
    const observerOptions = {
        root: null, // Monitors the main browser viewport
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adds class to trigger CSS transition
                entry.target.classList.add('is-visible');
                // Stops observing once animated to avoid repeated triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select and observe all reveal target elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

});