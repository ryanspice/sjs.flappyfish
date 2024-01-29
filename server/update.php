<?php
// Base64 encoded credentials
$encodedUsername = 'cnNwaWNl';
$encodedPassword = 'eWFob28xMjM=';
$encodedDbName = 'cnNwaWNlX3Nub3c=';

// Decoding credentials
$decodedUsername = base64_decode($encodedUsername);
$decodedPassword = base64_decode($encodedPassword);
$decodedDbName = base64_decode($encodedDbName);

// PDO connection setup
$dsn = 'mysql:host=localhost;dbname=' . $decodedDbName . ';charset=utf8';
try {
    $pdo = new PDO($dsn, $decodedUsername, $decodedPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Validate and sanitize GET parameters
    $name = isset($_GET['name']) ? filter_var($_GET['name'], FILTER_SANITIZE_STRING) : '';
    $score = isset($_GET['score']) ? filter_var($_GET['score'], FILTER_VALIDATE_INT) : 0;

    // Prepare and execute SQL query
    $stmt = $pdo->prepare("INSERT INTO `flappy` (`id`, `name`, `score`) VALUES (NULL, :name, :score)");
    $result = $stmt->execute([':name' => $name, ':score' => $score]);

    echo $result ? "Success" : "Error";
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>
