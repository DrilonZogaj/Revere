<?php 
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $service = $_POST['service'];
    $notes = $_POST['notes'];

    // Validation
    $errors = [];

    if (!preg_match("/^[A-Z][a-z]+ [A-Z][a-z]+$/", $name)) {
        $errors[] = "Name must be in 'First Last' format with capital letters.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }
    if (!preg_match("/^0\d{8}$/", $phone)) {
        $errors[] = "Phone number must start with 0 and contain 8 digits.";
    }
    if (empty($date) || !strtotime($date)) {
        $errors[] = "Invalid or missing date.";
    }
    if (empty($time)) {
        $errors[] = "Time is required.";
    }
    if (empty($service)) {
        $errors[] = "Service is required.";
    }

    // If there are validation errors
    if (!empty($errors)) {
        echo json_encode(["status" => "error", "message" => implode(", ", $errors)]);
        exit;
    }
    $query = "INSERT INTO appointments (name, email, phone, date, time, service, notes) 
              VALUES (:Name, :Email, :Phone, :Date, :Time, :Service, :Notes)";
    $stmt = $conn->prepare($query);

    $stmt->bindParam(":Name", $name);
    $stmt->bindParam(":Email", $email);
    $stmt->bindParam(":Phone", $phone);
    $stmt->bindParam(":Date", $date);
    $stmt->bindParam(":Time", $time);
    $stmt->bindParam(":Service", $service);
    $stmt->bindParam(":Notes", $notes);

    // If the insertion was successful
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Appointment booked successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Something went wrong. Please try again."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method. Please use POST."]);
}
?>