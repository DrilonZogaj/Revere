<?php
header("Content-Type: application/json");

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php'; // Your database connection

// Check if the request method is DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get the raw POST data and decode it
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Check if the appointment ID is provided
    if (isset($data['appointment_id'])) {
        $appointment_id = $data['appointment_id'];

        try {
            // Prepare and execute the delete query
            $query = "DELETE FROM appointments WHERE id = :appointment_id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":appointment_id", $appointment_id, PDO::PARAM_INT);

            // Execute the statement and check if deletion was successful
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Appointment deleted successfully!"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to delete appointment."]);
            }
        } catch (Exception $e) {
            // Handle any errors that occur during the deletion process
            echo json_encode(["status" => "error", "message" => "An error occurred: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Appointment ID is required."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
