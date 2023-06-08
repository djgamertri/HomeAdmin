<div class="container">
    <nav></nav>
    <section>
        <form action="../../Controller/tax/Tax.php" method="post">
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
            <?php 
            if (!empty($_GET)){
                echo $_GET["complete"];
            } 
            ?>
        </form>
    </section>
</div>
