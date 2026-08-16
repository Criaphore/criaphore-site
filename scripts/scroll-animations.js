const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smart Back Navigation: return directly to exact previous position without jump/animation reset
    const backLinks = document.querySelectorAll('a.brand[title*="Back"], .navbar-links a[href*="Back"]');
    backLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.history.length > 1 && document.referrer && document.referrer.includes(window.location.host)) {
                e.preventDefault();
                window.history.back();
            }
        });
    });
});
