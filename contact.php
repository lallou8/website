<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = 'your-email@example.com';
  $subject = 'New Contact Message';
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
  } else {
    echo "<script>alert('Error sending message. Try again.'); window.history.back();</script>";
  }
}
?>
