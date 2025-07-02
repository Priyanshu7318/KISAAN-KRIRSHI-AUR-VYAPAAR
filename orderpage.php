<?php
// Database connection
$servername = "localhost"; // Change this to your server name if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "kkv"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize and get form input values
    $full_name = $conn->real_escape_string($_POST['full_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone_no = $conn->real_escape_string($_POST['phone_no']);
    $street_address = $conn->real_escape_string($_POST['street_address']);
    $city = $conn->real_escape_string($_POST['city']);
    $select_state = $conn->real_escape_string($_POST['select_state']);
    $pincode = $conn->real_escape_string($_POST['pincode']);
    $quantity = intval($_POST['quantity']); // Ensure it's an integer

    // Prepare the SQL statement to insert the data into the database
    $sql = "INSERT INTO order_page (full_name, email, phone_no, street_address, city, select_state, pincode, quantity)
            VALUES ('$full_name', '$email', '$phone_no', '$street_address', '$city', '$select_state', '$pincode', '$quantity')";

    // Execute the query and check if the data was inserted successfully
    if ($conn->query($sql) === TRUE) {
        // Redirect to a confirmation page or show a success message
        echo "<script>alert('Order placed successfully! Thank you for shopping with us.'); window.location.href = '/HTML Files/main page.html';</script>";
    } else {
        // If there was an error, display it
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
