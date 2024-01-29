<?php


$decodedUsername = base64_decode($encodedUsername);
$decodedPassword = base64_decode($encodedPassword);
$decodedDbName = base64_decode($encodedDbName);

function getTopScores() {
    $dsn = 'mysql:host=localhost;dbname='.$decodedDbName.';charset=utf8';
    $user = $decodedUsername;
    $password = $decodedPassword;

    try {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->query("SELECT * FROM `flappy` ORDER BY `score` DESC LIMIT 3");
        $scores = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $scores;
    } catch (PDOException $e) {
        die("ERROR: Could not connect. " . $e->getMessage());
    }
}

$scores = getTopScores();
echo "App.scores = " . json_encode($scores) . ";";
?>
