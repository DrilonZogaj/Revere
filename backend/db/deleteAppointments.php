<?php
header("Content-Type: application/json");

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (isset($data['appointment_id'])) {
        $appointment_id = $data['appointment_id'];

        try {
            $query = "DELETE FROM appointments WHERE id = :appointment_id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":appointment_id", $appointment_id, PDO::PARAM_INT);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Appointment deleted successfully!"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to delete appointment."]);
            }
        } catch (Exception $e) {
            echo json_encode(["status" => "error", "message" => "An error occurred: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Appointment ID is required."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
