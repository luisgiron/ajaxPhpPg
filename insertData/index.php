<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Insertando data en PostgreSQL utilizando Ajax</title>
     <!--link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"-->
     <link rel="stylesheet" href="../css/bootstrap_3.3.7.min.css">
</head>
<body>
    <div style="margin: auto;width:50%;">
        <div id="success" class="alert-success alert-dismissible" style="display: none;" >
            <a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>
        </div>
        <form id="fupForm" name="form1" method="post">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name"  name="name" class="form-control" placeholder="Nombre" size="50">
            </div>
            <div class="form-group">
                <label for="email">Correo:</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="Correo" size="50">
            </div>
            <div>
                <label for="phone">Teléfono:</label>
                <input type="text" id="phone" name="phone" class="form-control" placeholder="Teléfono" size="50">
            </div>
            <div class="form-group">
                <label for="city">Ciudad:</label>
                <select name="city" id="city" class="form-control">
                    <option value="">Seleccione</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                </select>
            </div>
            <input type="button" id="butsave" name="butsave" class="btn btn-primary" value="Grabar Registro">
        </form>
    </div>
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script-->
    <script src="../js/jquery_3.2.1.min.js"></script>
    <script src="js/index.js"></script>    
</body>
</html>
