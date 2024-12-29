
<?php
// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'config.php';

try {
    // Query to get all appointments with consistent column naming
    $query = "SELECT id AS appointment_id, name, email, phone, date, time, service, notes FROM appointments";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    // Fetch appointments
    $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Log for debugging
    error_log(print_r($appointments, true));

    echo json_encode($appointments);
} catch (Exception $e) {
    // Handle errors
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
