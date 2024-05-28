<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chameleon";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch form data
$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm-password'];

// Validate form data
if ($password !== $confirmPassword) {
    die("Passwords do not match.");
}

// Check if the email already exists
$sql = "SELECT id FROM chameleon_evcflo WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    die("Email already registered.");
}

$stmt->close();

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Insert user into the database
$sql = "INSERT INTO chameleon_evcflo (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $firstName, $lastName, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "Signup successful!";
    header("Location: login.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>