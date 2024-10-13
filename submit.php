<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    // Validate passwords match
    if ($password !== $repassword) {
        echo "<script>alert('Passwords do not match!'); window.history.back();</script>";
        exit();
    }

    // Send confirmation email
    $to = $email;
    $subject = "Registration Successful";
    $message = "Dear $firstname $lastname,\n\nThank you for registering!\n\nBest Regards,\nTeam";
    $headers = "From: admin@example.com";

    if (mail($to, $subject, $message, $headers)) {
        // Redirect to success page
        header("Location: success.html");
        exit();
    } else {
        echo "<script>alert('Failed to send confirmation email.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request method.";
}
?>
