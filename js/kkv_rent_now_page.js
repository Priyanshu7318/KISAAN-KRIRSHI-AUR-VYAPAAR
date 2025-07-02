document.addEventListener('DOMContentLoaded', () => {
    // Set minimum date 
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').min = today;
    document.getElementById('end-date').min = today;

    // Load product
    const product = JSON.parse(localStorage.getItem('rentProduct'));
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        
        // Calculate daily rate
        const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
        const dailyRate = Math.round(price * 0.1);
        document.getElementById('daily-rate').textContent = `₹${dailyRate}`;
        document.getElementById('rate-display').textContent = `₹${dailyRate}`;
    }

    // Calculate rental
    function calculateRental() {
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);
        
        if (startDate && endDate && startDate <= endDate) {
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            const dailyRate = parseInt(document.getElementById('daily-rate').textContent.replace('₹', ''));
            
            const rentalAmount = dailyRate * diffDays;
            const totalAmount = rentalAmount + 1000 + 40; 

            document.getElementById('duration').textContent = `${diffDays} days`;
            document.getElementById('days-display').textContent = diffDays;
            document.getElementById('rental-amount').textContent = `₹${rentalAmount}`;
            document.getElementById('total-amount').textContent = `₹${totalAmount}`;
        }
    }

    document.getElementById('start-date').addEventListener('change', calculateRental);
    document.getElementById('end-date').addEventListener('change', calculateRental);

    // Payment method 
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => 
                m.classList.remove('selected'));
            method.classList.add('selected');
        });
    });

    document.querySelector('.submit-btn').addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!document.getElementById('start-date').value || 
            !document.getElementById('end-date').value) {
            alert('Please select rental dates');
            return;
        }

        // form validation
        const required = ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
        const invalid = required.filter(id => !document.getElementById(id).value);
        
        if (invalid.length > 0) {
            alert('Please fill in all required fields');
            return;
        }

        if (!document.querySelector('.payment-method.selected')) {
            alert('Please select a payment method');
            return;
        }

        // Show message
        alert('Rental confirmed! Thank you for choosing our service.');
        window.location.href = '/HTML Files/product.html';
    });
});