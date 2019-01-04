<?php 
	$mysqli =  new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);

	if (mysqli_connect_errno()) {
		echo "Conexion Fallida :" , mysqli_connect_error();
		exit();
	}

?>

