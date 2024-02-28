<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $correo = $_POST["email"];
    $mensaje = $_POST["message"];
    $destinatario = "sriverabuitrago4@gmail.com";
    $asunto = "Mensaje de contacto de $nombre";
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo: $correo\n";
    $cuerpo .= "Mensaje:\n$mensaje";
    $cabeceras = "From: $correo";
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo json_encode(array("status" => "success", "message" => "Mensaje enviado correctamente. ¡Gracias por ponerte en contacto con nosotros!"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."));
    }
}
?>
