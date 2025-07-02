// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay between slides (5 seconds)
        disableOnInteraction: false,
    },
    speed: 1500, // Slower slide transition (1 second)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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

 // Header Scroll Effect
 window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});