let generatedOTP = null;
let timerInterval = null;

document.getElementById('send-otp').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    if (!phone) {
        alert('Please enter phone number first');
        return;
    }

    // Generate a 4-digit OTP (for demonstration)
    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert(`Mobile OTP sent successfully: Your OTP is: ${generatedOTP}`); // In a real scenario, send via SMS API

    // Start countdown timer
    let timeLeft = 30;
    this.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Resend OTP in ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            this.disabled = false;
            document.getElementById('timer').textContent = '';
        }
    }, 1000);
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const enteredOTP = document.getElementById('otp-input').value;

    if (enteredOTP !== String(generatedOTP)) {
        alert('Invalid OTP! Please check and try again.');
        return;
    }

    // If OTP matches, proceed with form submission
    this.submit(); // Programmatically submit the form
});

// Password match validation (fixed IDs)
document.getElementById('confirm-password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    if (this.value !== password) {
        this.setCustomValidity('Passwords do not match');
    } else {
        this.setCustomValidity('');
    }
});