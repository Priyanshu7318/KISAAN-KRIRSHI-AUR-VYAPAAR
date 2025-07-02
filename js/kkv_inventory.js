        // Modal Functions
        const modal = document.getElementById('addModal');

        function openModal() {
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        // Toggle Fields Based on Category
        function toggleFields() {
            const category = document.getElementById('itemCategory').value;
            const generalFields = document.getElementById('generalFields');
            const machineryFields = document.getElementById('machineryFields');

            if (category === 'machinery') {
                generalFields.style.display = 'none';
                machineryFields.style.display = 'block';
            } else {
                generalFields.style.display = 'block';
                machineryFields.style.display = 'none';
            }
        }

        // Save Item Function
        function saveItem() {
            const name = document.getElementById('itemName').value;
            const category = document.getElementById('itemCategory').value;
            const price = document.getElementById('itemPrice').value;
            const quantity = document.getElementById('itemQuantity').value;
            const unit = document.getElementById('itemUnit').value;
            const machinePrice = document.getElementById('machinePrice').value;
            const machineryQuantity = document.getElementById('machineryQuantity').value;

            if (name && category) {
                let priceDisplay, quantityDisplay;
                if (category === 'machinery') {
                    priceDisplay = `₹${machinePrice}`;
                    quantityDisplay = `${machineryQuantity} pieces`;
                } else {
                    priceDisplay = `₹${price}/${unit}`;
                    quantityDisplay = `${quantity} ${unit}`;
                }

                const newRow = `
                    <tr>
                        <td>${name}</td>
                        <td>${category}</td>
                        <td>${priceDisplay}</td>
                        <td>${quantityDisplay}</td>
                        <td><span class="status in-stock">In Stock</span></td>
                        <td>
                            <button class="btn btn-edit" onclick="editItem(this)">Edit</button>
                            <button class="btn btn-danger" onclick="deleteItem(this)">Delete</button>
                        </td>
                    </tr>
                `;
                document.getElementById('inventoryBody').insertAdjacentHTML('beforeend', newRow);
                closeModal();
            } else {
                alert('Please fill all fields!');
            }
        }

        // Edit Item Function
        function editItem(button) {
            const row = button.closest('tr');
            const cells = row.querySelectorAll('td');

            document.getElementById('itemName').value = cells[0].innerText;
            document.getElementById('itemCategory').value = cells[1].innerText.toLowerCase();

            if (cells[1].innerText.toLowerCase() === 'machinery') {
                document.getElementById('machinePrice').value = parseFloat(cells[2].innerText.replace('₹', ''));
                document.getElementById('machineryQuantity').value = parseFloat(cells[3].innerText.split(' ')[0]);
                toggleFields();
            } else {
                document.getElementById('itemPrice').value = parseFloat(cells[2].innerText.replace('₹', '').split('/')[0]);
                document.getElementById('itemQuantity').value = parseFloat(cells[3].innerText.split(' ')[0]);
                document.getElementById('itemUnit').value = cells[3].innerText.split(' ')[1];
                toggleFields();
            }

            openModal();

            // Remove the old row after editing
            row.remove();
        }

        // Delete Item Function
        function deleteItem(button) {
            if (confirm('Are you sure you want to delete this item?')) {
                const row = button.closest('tr');
                row.remove();
            }
        }

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