        // Image Preview Functionality
        const imageInput = document.getElementById('productImage');
        const imagePreview = document.getElementById('image-preview');

        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.style.display = 'block';
                    imagePreview.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });