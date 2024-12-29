<?php
// Set the content type to JSON
header("Content-Type: application/json");

// CORS headers for cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'config.php'; // Make sure your DB configuration is correct

// Fetch all submissions from the database
try {
    $query = "SELECT * FROM submissions ORDER BY created_at DESC"; // Adjust order as needed
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    // Fetch all the submissions
    $submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if any submissions exist
    if ($submissions) {
        // Return the submissions in JSON format
        echo json_encode(["success" => true, "submissions" => $submissions]);
    } else {
        // If no submissions exist, return an empty array
        echo json_encode(["success" => true, "submissions" => []]);
    }
} catch (Exception $e) {
    // Return error message if the query fails
    echo json_encode(["success" => false, "message" => "Error fetching submissions: " . $e->getMessage()]);
}
