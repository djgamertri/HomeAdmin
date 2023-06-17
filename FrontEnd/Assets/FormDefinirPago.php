<section class="home">
    <div class="text">
        <div class="container">
            <div class="container-form">
                <h2>Formulario de estipulación de pagos administrativos</h2>
                <form action="../../Controller/tax/Tax.php" method="post">
                    <div>
                        <label for="TaxValue" class="form-label">Digite la nueva cuota para el pago administrativo</label>
                        <input type="number" class="form-input" id="TaxValue" name="TaxValue" placeholder="10000" required autofocus>
                    </div>
                    <div>
                        <label for="TaxYear" class="form-label">Digite el año en que va a estar vigente la nueva cuota de administración</label>
                        <input type="date" class="form-input" id="TaxYear" name="TaxYear" placeholder="Año" required>
                    </div>
                    <div class="form-botton-end">
                        <button type="submit" class="form-buttom-back">Regresar</button>
                        <button type="submit" class="form-button">Actualizar</button>
                    </div>
                    <?php
                    if (!empty($_GET)) {
                        echo $_GET["complete"];
                    }
                    ?>
                </form>
            </div>
            <?php include_once("../../Assets/FooterForm.php") ?>
        </div>
    </div>
</section>  
