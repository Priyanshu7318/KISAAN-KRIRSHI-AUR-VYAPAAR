<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database configuration
    $servername = "localhost";
    $username = "root"; // default XAMPP username
    $password = "";     // default XAMPP password
    $dbname = "kkv";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
  
    // Initialize variables
    $errors = [];
    $success = false;
    $photo_name = "";
    $photo_type = "";
    $photo_data = "";

    // Process photo upload
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
        $photo = $_FILES['photo'];
        $allowed_types = ['image/jpeg', 'image/jpg'];
        $photo_type = $photo['type'];
        $photo_ext = strtolower(pathinfo($photo['name'], PATHINFO_EXTENSION));
        
        if (in_array($photo_type, $allowed_types) && in_array($photo_ext, ['jpg', 'jpeg'])) {
            $photo_name = mysqli_real_escape_string($conn, $photo['name']);
            $photo_type = mysqli_real_escape_string($conn, $photo['type']);
            $photo_data = mysqli_real_escape_string($conn, file_get_contents($photo['tmp_name']));
        } else {
            $errors[] = "Only JPG/JPEG images are allowed for upload.";
        }
    } else {
        $errors[] = "Please upload a product photo.";
    }

    // Process form data
    $product_category = mysqli_real_escape_string($conn, $_POST['product_category'] ?? '');
    $product_name = mysqli_real_escape_string($conn, $_POST['product_name'] ?? '');
    $price = mysqli_real_escape_string($conn, $_POST['price'] ?? '');
    $quantity = mysqli_real_escape_string($conn, $_POST['quantity'] ?? '');
    $date = mysqli_real_escape_string($conn, $_POST['reg_date'] ?? '');
    $location = mysqli_real_escape_string($conn, $_POST['pro_location'] ?? '');
    $photo_description = mysqli_real_escape_string($conn, $_POST['product_description'] ?? '');

    // Validate required fields
    if (empty($product_category)) $errors[] = "Product category is required";
    if (empty($product_name)) $errors[] = "Product name is required";
    if (empty($price) || !is_numeric($price)) $errors[] = "Valid price is required";
    if (empty($quantity) || !is_numeric($quantity)) $errors[] = "Valid quantity is required";
    if (empty($date)) $errors[] = "Date is required";
    if (empty($location)) $errors[] = "Location is required";
    
    // Insert data if no errors
    if (empty($errors)) {
        $sql = "INSERT INTO seller_form (
                product_category, 
                product_name, 
                price, 
                quantity, 
                reg_date, 
                pro_location, 
                product_description, 
                photo_name, 
                photo_type, 
                photo_data
            ) VALUES (
                '$product_category',
                '$product_name',
                '$price',
                '$quantity',
                '$date',
                '$location',
                '$photo_description',
                '$photo_name',
                '$photo_type',
                '$photo_data'
            )";

        if ($conn->query($sql) === TRUE) {
            $success = true;
            echo "Data inserted successfully!";
        } else {
            $errors[] = "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Display errors if any
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p>Error: $error</p>";
        }
    }
}
?>