<?php
header("Content-Type: application/json");

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $data = $_POST;

    if (empty($data['firstName']) || empty($data['lastName']) || empty($data['email']) || empty($data['message'])) {
        echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
        exit;
    }

    $firstName = trim($data['firstName']);
    $lastName = trim($data['lastName']);
    $email = trim($data['email']);
    $phoneNumber = isset($data['phoneNumber']) ? trim($data['phoneNumber']) : '';
    $message = trim($data['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Please enter a valid email address."]);
        exit;
    }

    if ($phoneNumber && !preg_match("/^0\d{8}$/", $phoneNumber)) {
        echo json_encode(["success" => false, "message" => "Phone number must be in the format 04x xxx xxx."]);
        exit;
    }

    try {
        $query = "INSERT INTO submissions (first_name, last_name, email, phone_number, message) 
                  VALUES (:first_name, :last_name, :email, :phone_number, :message)";
        $stmt = $conn->prepare($query);

        $stmt->bindParam(':first_name', $firstName);
        $stmt->bindParam(':last_name', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone_number', $phoneNumber);
        $stmt->bindParam(':message', $message);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Your message has been successfully submitted!"]);
        } else {
            echo json_encode(["success" => false, "message" => "There was an issue submitting your message. Please try again later."]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }

} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
