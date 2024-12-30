<?php

header("Content-Type: application/json");

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php';

try {
    $query = "SELECT * FROM submissions ORDER BY created_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    // Fetch all the submissions
    $submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if any submissions exist
    if ($submissions) {
        echo json_encode(["success" => true, "submissions" => $submissions]);
    } else {
        echo json_encode(["success" => true, "submissions" => []]);
    }
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Error fetching submissions: " . $e->getMessage()]);
}
