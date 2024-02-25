<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]);
    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName = htmlspecialchars($_POST["lastName"]);

    // Sample array of cancer drug names
    $drugNames = array("Cisplatin", "Tamoxifen", "Paclitaxel", "Herceptin", "Imatinib", "Rituximab");

    // Generate a random drug name
    $randomDrug = $drugNames[array_rand($drugNames)];

    // Display the result on the second page
    header("Location: result.php?username=$username&firstName=$firstName&lastName=$lastName&drug=$randomDrug");
    exit();
}
?>
