<?php
if (isset($_POST['submit'])) {

    $miMail = "conaruisam@gmail.com";
    
    if (!empty($_POST['name'])
     && !empty($_POST['lastnam)e']
     && !empty($_POST['email'])
     && !empty($_POST['subject'])
     && !empty($_POST['mensaje'])) {
         $name      = $_POST['name'];
         $lastname   = $_POST['lastname'];
         $mail      = $_POST['email'];
         $subject   = $_POST['subject'];
         $mensaje   = $_POST['mensaje'];


        echo("WEWO"); 
         // Ejecutamos
         $mail = mail($miMail, $subject, $mensaje);

         if ($mail) {
             echo "<h4> Enviado exitosamente </h4>"
         }
     }
}
?>