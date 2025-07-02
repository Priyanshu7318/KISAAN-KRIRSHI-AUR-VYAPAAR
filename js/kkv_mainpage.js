// slidebar image-grid
let index = 0;
function moveSlide(step) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    index = (index + step + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

function autoSlide() {
    moveSlide(1);
}

setInterval(autoSlide, 3000); // Move slide every 3 seconds

// Add active class to current page button
const currentPage = location.pathname.split('/').pop();
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
    if(btn.innerText.toLowerCase().includes(currentPage.toLowerCase().replace('.html',''))) {
        btn.classList.add('active');
    }
});
// Add this to your existing <script> section
window.addEventListener('scroll', function() {
const header = document.querySelector('.header');
if (window.scrollY > 100) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Override the default botpress initialization
window.botpressWebChat = {
    init: function() {
        // Check if user is logged in before initializing chat
        if (!isLoggedIn()) {
            // Redirect to login page
            window.location.href = 'login.html';
            return;
        }
        
        // If logged in, initialize the actual chat
        window.botpressWebChat.originalInit({
            "composerPlaceholder": "Chat with bot",
            "botConversationDescription": "This chatbot is designed to help you",
            "botId": "T552BM4Y",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v2.2",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "T552BM4Y",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v2.2",
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    },
    originalInit: window.botpressWebChat.init
};

// Function to change language and save preference
function changeLanguage(lang) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        
        // Save language preference in cookie
        document.cookie = `googtrans=/en/${lang}; path=/; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}`;
    }
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const langCookie = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
    if (langCookie) {
        const lang = langCookie.split('=')[1].split('/').pop();
        setTimeout(() => {
            const select = document.querySelector('.goog-te-combo');
            if (select && select.value !== lang) {
                select.value = lang;
                select.dispatchEvent(new Event('change'));
            }
        }, 1000);
    }
});
