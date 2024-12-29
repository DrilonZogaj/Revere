<?php
header("Content-Type: application/json");

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve input data
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate the input data
    if (isset($data['appointment_id'], $data['name'], $data['email'])) {
        $appointment_id = $data['appointment_id'];
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $date = $data['date'];
        $time = $data['time'];
        $service = $data['service'];
        $notes = $data['notes'];

        try {
            // Update the appointment
            $query = "UPDATE appointments SET name = :name, email = :email, phone = :phone, date = :date, time = :time, service = :service, notes = :notes WHERE id = :appointment_id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":phone", $phone);
            $stmt->bindParam(":date", $date);
            $stmt->bindParam(":time", $time);
            $stmt->bindParam(":service", $service);
            $stmt->bindParam(":notes", $notes);
            $stmt->bindParam(":appointment_id", $appointment_id);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Appointment updated successfully!"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to update appointment."]);
            }
        } catch (Exception $e) {
            echo json_encode(["status" => "error", "message" => "An error occurred: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
