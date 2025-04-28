<?php
		 $servername='127.0.0.1';
		 $port=5432;
		 $username='postgres';
		 $password='';
		 $db='student';
		 $conn=pg_connect("host=$servername port=5432 dbname=$db user=$username password=$password");
		 if(!$conn)
		 {
					die('Problemas de Conectividad, por favor verifique ...');
		 }
?>
