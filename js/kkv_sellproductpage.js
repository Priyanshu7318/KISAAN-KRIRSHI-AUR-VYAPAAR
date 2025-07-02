// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-pop-in');
        }
    });
});

document.querySelectorAll('.service-card').forEach((el) => {
    observer.observe(el);
});
