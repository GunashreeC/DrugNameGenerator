<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = $_POST['userEmail'];
    $subject = 'Cancer Drug Name';

    $greeting = $_POST['greeting'];
    $generatedNames = $_POST['generatedNames'];

    // Create an HTML email body
    $message = '<html><body>';
    $message .= "<p>$greeting</p>";
    $message .= "<p>$generatedNames</p>";
    $message .= '</body></html>';

    // Set headers for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: gunagowda971@gmail.com' . "\r\n"; // Change this to your email address

    // Send email
    mail($to, $subject, $message, $headers);

    echo 'Email sent successfully';
} else {
    echo 'Invalid request';
}
?>
