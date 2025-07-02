document.querySelectorAll('.slider-container').forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach(img => img.style.opacity = 0);
        images[index].style.opacity = 1;
    }

    slider.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    slider.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});
document.querySelectorAll('.slider-container').forEach(slider => {
    const images = slider.querySelectorAll('.slider-images img');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Auto slide 5 sec
    let autoSlide = setInterval(nextImage, 5000);

    // Pause autoslide on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextImage, 5000);
    });

    // Button 
    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        nextImage();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        prevImage();
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
    cartCount.classList.add('cart-bounce');
    setTimeout(() => cartCount.classList.remove('cart-bounce'), 300);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background: #4CAF50;
        color: white;
        border-radius: 30px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const productGrid = document.getElementById('product-grid');

// Filter
function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category-filter').value;

    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const cardCategory = card.dataset.category;
        const matchesSearch = name.includes(searchTerm);
        const matchesCategory = category === 'all' || cardCategory === category;
        
        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });

    productGrid.style.display = 'none';
    productGrid.offsetHeight;
    productGrid.style.display = 'grid';
}

// Cart fun
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const product = {
            name: productCard.querySelector('h3').textContent,
            price: productCard.querySelector('.price').textContent,
            image: productCard.querySelector('img.active')?.src || ''
        };
        
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
    
    if(e.target.classList.contains('buy-now')) {
        const productCard = e.target.closest('.product-card');
        const product = {
            name: productCard.querySelector('h3').textContent,
            price: productCard.querySelector('.price').textContent,
            image: productCard.querySelector('img.active')?.src || '',
            description: productCard.querySelector('p').textContent,
            category: productCard.dataset.category
        };
        
        localStorage.setItem('buyNowProduct', JSON.stringify(product));
        window.location.href = 'kkv_buy_now_page.html';
    }
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        background: #4CAF50;
        color: white;
        border-radius: 5px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}
document.querySelectorAll('.slider-container').forEach(slider => {
    const images = slider.querySelectorAll('.slider-images img');
    let currentIndex = 0;
    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    slider.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    slider.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
});

// Cart 
document.getElementById('view-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
    renderCart();
});

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" width="50">` : ''}
            <div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
    `).join('');
}

window.removeFromCart = (name) => {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

document.querySelector('.close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

document.querySelector('.checkout').addEventListener('click', () => {
    alert('Redirecting to checkout...');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.getElementById('cart-modal').style.display = 'none';
});

// listeners
document.getElementById('search').addEventListener('input', filterProducts);
document.getElementById('category-filter').addEventListener('change', filterProducts);

// Initialization
filterProducts();
updateCartCount();

document.addEventListener('DOMContentLoaded', () => {
    // Active state
    const currentPage = window.location.pathname;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.closest('a').getAttribute('href').includes(currentPage)) {
            btn.classList.add('active');
        }
    });

    // Buy button
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.price').textContent,
                image: productCard.querySelector('img.active').src,
                description: productCard.querySelector('p').textContent,
                category: productCard.dataset.category
            };
            localStorage.setItem('buyNowProduct', JSON.stringify(product));
            window.location.href = 'kkv_buy_now_Page';
        });
    });

    // Rent button
    document.querySelectorAll('.rent-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.price').textContent,
                image: productCard.querySelector('img.active').src,
                description: productCard.querySelector('p').textContent,
                category: productCard.dataset.category
            };
            localStorage.setItem('rentProduct', JSON.stringify(product));
            window.location.href = 'kkv_rent_now_page.html';
        });
    });
});
 //  Scroll Effect
 window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Animations
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
