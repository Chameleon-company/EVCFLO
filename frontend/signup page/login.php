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
$email = $_POST['email'];
$password = $_POST['password'];

// Fetch user from the database
$sql = "SELECT id, password FROM chameleon_evcflo WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($userId, $hashedPassword);

if ($stmt->num_rows > 0) {
    $stmt->fetch();
    if (password_verify($password, $hashedPassword)) {
        echo "Login successful!";
        // Uncomment below lines to use sessions
        // session_start();
        // $_SESSION['user_id'] = $userId;
        // header("Location: dashboard.php");
    } else {
        echo "Invalid email or password.";
    }
} else {
    echo "No user found with this email.";
}

$stmt->close();
$conn->close();
?>