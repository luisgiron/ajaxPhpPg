<?php
    include '../database.php';
    $nombre  =$_POST['nombre'];
    $correo  =$_POST['correo'];
    $telefono=$_POST['telefono'];
    $ciudad  =$_POST['ciudad'];

    $sql="INSERT INTO crud (nombre, correo,telefono,ciudad) VALUES ('$nombre', '$correo', '$telefono', '$ciudad')";

    //$rs=pg_query($conn, $sql);
    //var_dump($sql);
    if(pg_query($conn, $sql))
    {
        echo json_encode(array("statusCode"=>200));
    }
    else
    {
        echo json_encode(array("statusCode"=>201));
    }
?>
