<?php  
    https://es.pornhub.com/view_video.php?viewkey=ph5a9852b2a8624

    $title_start = "PornoContigo";

    $Ancho = "10%";
    $Alto = "8%";


    //Recursos
    require_once("conec/db.php");
    require_once("conec/conexion.php");

    $query="SELECT *  FROM direcciones_porn";
    $resultado=$mysqli->query($query);

?>

<!DOCTYPE html>
<html lang="es">
<head>
	<title><?php echo $title_start; ?></title>
	<meta name="viewport" content="device-width, user-scale=no, initial=1.0, maximun-scale=1.0, minimun-scale=1.0"/>
	<meta charset="utf-8"/>
	<meta name="keyswords" description="sex, fun, porn, sexo, diversión, pasatiempo"/>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/animate.css"/>
	<link rel="stylesheet" href="css/estilos.css"/>
	<!-- <link rel="shortcut icon" href=""/> -->
	<link rel="icon" type="image/png" href="img/isoporn.png"/>
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
</head>
    
<body>
	<header>
        <div class="contenedor">
            <nav class="">
                <img src="img/logoporn.png" class="animated tada" />
                <!-- <ul>
                    <li><a>Categoria</a></li>
                    <li><a>Buscar</a></li>
                    <li><a>home</a></li>
                </ul> -->
            </nav>
        </div>
	</header>
	<section>

        <!-- 
        <iframe src="https://es.pornhub.com/embed/ph5a88b9164ebc8" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <iframe src="https://es.pornhub.com/embed/ph5a4c4c84bec4f" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <iframe src="https://es.pornhub.com/embed/ph59e8ca77e0a15" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <iframe src="https://es.pornhub.com/embed/ph5a0bd02cb9d1f" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <iframe src="https://es.pornhub.com/embed/ph5a5911dd69355" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <iframe src="https://es.pornhub.com/embed/ph5a273a3158e17" frameborder="0" scrolling="no" allowfullscreen></iframe>
        -->

        <!--
        <div class="">
            <?php while($row=$resultado->fetch_assoc()){ ?>
                <a href="vistaMovie.php">
                    <img src="<?php echo $row['imagenPorn'];?>" class="imgPorn1" />
                </a>
                <article class="invisible">
                    <h3><?php echo $row['tituloPorn'];?></h3> 
                    <p><?php echo $row['descripcionPorn'];?></p>
                    <p>Reproducciones: <?php echo $row['vistasPorn'] ?></p> 
                    <ul class="actions">
                        <li><a href="<?php echo $row['descarga_enlace'];?>" class="button">Descargar</a></li>
                    </ul>
                </article>
            <?php } ?>
        </div>
        -->


        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>
        <div><img src="img/fond1.jpg"></div>




	</section>
    

</body>
</html>