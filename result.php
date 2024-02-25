<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Name Result</title>
</head>
<body>
    <div class="container">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            $username = htmlspecialchars($_GET["username"]);
            $firstName = htmlspecialchars($_GET["firstName"]);
            $lastName = htmlspecialchars($_GET["lastName"]);
            $drug = htmlspecialchars($_GET["drug"]);
            echo "<h2>Hi, $username!</h2>";
            echo "<p>Your new name is: $firstName $lastName $drug</p>";
        }
        ?>
    </div>
</body>
</html>
