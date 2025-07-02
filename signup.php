<?php
// Database connection details
$host = 'localhost'; // Database host (usually 'localhost')
$dbname = 'kkv'; // Database name
$username = 'root'; // Default username for MySQL (change if different)
$password = ''; // Default password for MySQL (change if different)

// Create a connection to the database
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $phone_no = $_POST['phone_no'];
    $password = $_POST['password'];

    // Validate and sanitize the phone number
    $phone_no = filter_var($phone_no, FILTER_SANITIZE_NUMBER_INT); // Remove all non-numeric characters
    $phone_no = preg_replace('/[^0-9]/', '', $phone_no); // Ensure only digits remain

    // Validate phone number length (e.g., 10 digits for Indian numbers)
    if (strlen($phone_no) !== 10) {
        die("Invalid phone number! Please enter a 10-digit phone number.");
    }

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare SQL query to insert data into the database
    $sql = "INSERT INTO sign_up (name, phone_no, password) VALUES (:name, :phone_no, :password)";
    $stmt = $conn->prepare($sql);

    // Bind parameters and execute the query
    try {
        $stmt->execute([
            ':name' => $name,
            ':phone_no' => $phone_no,
            ':password' => $hashed_password
        ]);

        // Redirect to a success page or display a success message
        echo "<script>alert('Registration successful!'); window.location.href = '/HTML Files/secondpage.html';</script>";
        exit();
    } catch (PDOException $e) {
        die("Error inserting data into the database: " . $e->getMessage());
    }
}
?>