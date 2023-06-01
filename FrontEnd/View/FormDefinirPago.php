<?php 
include_once "../Controller/SendData.php"

if ($_POST["TaxValue"] && $_POST["TaxYear"]) {
    //llama directamente a la Funcion SendDataPost()
    sendDataPost
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Definir Pago</title>
    <link rel="stylesheet" href="../Css/formDefinirPago.css">
</head>
<body>
    <div class="container">
        <nav></nav>
        <section>
            <form action="" method="post">
                <h1>Formulario de estipulación de pagos administrativos</h1>
                <div>
                    <label for="TaxValue">Digite la nueva cuota para el pago administrativo</label>
                    <input type="number" class="" id="TaxValue" name="TaxValue" placeholder="ej 55000" required autofocus>
                </div>
                <div>
                    <label for="TaxYear">Digite el año en que va a estar vigente la nueva cuota de administración</label>
                    <input type="date" class="" id="TaxYear" name="TaxYear" placeholder="Año" required>
                </div>
                <input type="submit" value="Enviar">
            </form>
        </section>
    </div>
</body>
</html>
