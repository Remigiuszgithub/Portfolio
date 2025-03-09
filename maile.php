<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    

    // Adres e-mail, na który zostanie wysłana wiadomość
    $to = "remigiusz.nowakowski@remigiusznowakowski.pl";

    // Nagłówki wiadomości
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Treść wiadomości
    $mailContent = "
    <html>
    <body>
        <h2>Nowa wiadomość ze strony remigiusznowakowski.pl od $name</h2>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Numer telefonu:</strong> $phone</p>
        <p><strong>Wiadomość:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";

    // Wysyłanie wiadomości e-mail
    mail($to, $subject, $mailContent, $headers);

    // Przekierowanie po wysłaniu
    header("Location: https://remigiusznowakowski.pl"); // Tutaj podaj odpowiednią stronę, na którą chcesz przekierować po wysłaniu formularza
    exit();
}
?>
