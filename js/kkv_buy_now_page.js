        // Load product details
        document.addEventListener('DOMContentLoaded', () => {
            const product = JSON.parse(localStorage.getItem('buyNowProduct'));
            if (product) {
                document.getElementById('product-image').src = product.image;
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-description').textContent = product.description;
                updatePrice();
            }
        });

        // Payment method 
        document.querySelectorAll('.payment-method').forEach(method => {
            method.addEventListener('click', () => {
                document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
                method.classList.add('selected');
            });
        });

        // Form submission
        document.querySelector('.submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
            // Basic form validation
            const required = ['name', 'email', 'phone', 'street', 'city', 'state', 'pincode'];
            const invalid = required.filter(id => !document.getElementById(id).value);
            
            if (invalid.length > 0) {
                alert('Please fill in all required fields');
                return;
            }

            if (!document.querySelector('.payment-method.selected')) {
                alert('Please select a payment method');
                return;
            }

            // Show success
            alert('Order placed successfully! Thank you for shopping with us.');
            window.location.href = 'kkv_product_page.html';
        });


        // control fun
const quantityInput = document.getElementById('quantity');
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');

function updatePrice() {
    const product = JSON.parse(localStorage.getItem('buyNowProduct'));
    const quantity = parseInt(quantityInput.value);
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    const subtotal = basePrice * quantity;
    const deliveryCharge = 40;
    const total = subtotal + deliveryCharge;

    document.getElementById('product-price').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('total-price').textContent = `₹${total.toFixed(2)}`;
}

minusBtn.addEventListener('click', (e) => {
    e.preventDefault();  // submission
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updatePrice();
    }
});

plusBtn.addEventListener('click', (e) => {
    e.preventDefault();  // submission
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 99) {
        quantityInput.value = currentValue + 1;
        updatePrice();
    }
});

quantityInput.addEventListener('change', () => {
    let value = parseInt(quantityInput.value);
    if (value < 1) value = 1;
    if (value > 99) value = 99;
    quantityInput.value = value;
    updatePrice();
});