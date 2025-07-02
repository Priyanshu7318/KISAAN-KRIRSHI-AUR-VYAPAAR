// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Display uploaded image
const imageUpload = document.getElementById('imageUpload');
const uploadedImage = document.getElementById('uploadedImage');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // Show the image
        };
        reader.readAsDataURL(file);
    } else {
        uploadedImage.style.display = 'none'; // Hide the image if no file is selected
    }
});

// Prediction Logic
async function predictImage() {
    const predictionResult = document.getElementById('predictionResult');
    const file = imageUpload.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await fetch('http://127.0.0.1:8000/predict/', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            predictionResult.innerText = 'Prediction: ' + data.prediction;
        } catch (error) {
            predictionResult.innerText = 'Error: ' + error;
        }
    } else {
        predictionResult.innerText = 'Please upload an image.';
    }
}