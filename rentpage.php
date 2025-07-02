<?php
// Database configuration
$servername = "localhost"; // Change this if your database server is not localhost
$username = "root";        // Your database username
$password = "";            // Your database password
$dbname = "kkv";           // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $start_date = $_POST['start_date'];
    $end_date = $_POST['end_date'];
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $street_address = $_POST['street_address'];
    $city = $_POST['city'];
    $select_state = $_POST['select_state'];
    $pincode = $_POST['pincode'];

    // Prepare SQL query
    $sql = "INSERT INTO rent_page (start_date, end_date, full_name, email, phone_no, street_address, city, select_state, pincode)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare statement
    if ($stmt = $conn->prepare($sql)) {
        // Bind parameters
        $stmt->bind_param("sssssssss", $start_date, $end_date, $full_name, $email, $phone_no, $street_address, $city, $select_state, $pincode);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Data has been successfully saved!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the prepared statement
        $stmt->close();
    } else {
        echo "Error: " . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
