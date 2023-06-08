<section class="home">
    <div class="text">
        <div class="container">
            <div class="container-form">
                <h2>Actualizar datos de Usuario</h2>
                <form action="../../Controller/Resident/UpdateResident.php" method="post">
                    <div>
                        <label for="FullnameResident" class="form-label">Nombre completo</label>
                        <input type="text" class="form-input" id="FullnameResident " name="FullnameResident "
                            placeholder="Nombre completo" autofocus>
                    </div>
                    <div>
                        <label for="DateBornResident" class="form-label">Fecha de nacimiento</label>
                        <input type="date" class="form-input" id="DateBornResident" name="DateBornResident"
                            placeholder="Fecha de nacimiento">
                    </div>
                    <div>
                        <label for="TypeDocumentResident" class="form-label">Tipo Documento</label>
                    </div>
                    <div>
                        <select id="TypeDocumentResident" name="TypeDocumentResident" class="form-input">
                            <option class="form-option">Tarjeta de identidad</option>
                            <option class="form-option">Cedula ciudadania</option>
                            <option class="form-option">Cedula extranjeria</option>
                        </select>
                    </div>
                    <div>
                        <label for="IdResident" class="form-label">Numero de documento</label>
                        <input type="number" class="form-input" id="IdResident" name="IdResident"
                            placeholder="Numero de documento">
                    </div>
                    <div>
                        <label for="PhoneNumberResident" class="form-label">Telefono</label>
                        <input type="number" class="form-input" id="PhoneNumberResident" name="PhoneNumberResident"
                            placeholder="Telefono">
                    </div>
                    <div>
                        <label for="EmailResident" class="form-label">Email</label>
                        <input type="email" class="form-input" id="EmailResident" name="EmailResident"
                            placeholder="Correo">
                    </div>
                    <div>
                        <label for="StatusResident" class="form-label">Estado Residente</label>
                    </div>
                    <div>
                        <select id="StatusResident" name="StatusResident" class="form-input">
                            <option class="form-option">Activo</option>
                            <option class="form-option">Inactivo</option>
                            <option class="form-option">Pendiente</option>
                        </select>
                    </div>
                    <div>
                        <label for="NumberHouseResident" class="form-label">Numero casa</label>
                        <input type="number" class="form-input" id="NumberHouseResident" name="NumberHouseResident"
                            placeholder="Numero casa" >
                    </div>
                    <div>
                        <label for="PasswordResident" class="form-label">Contraseña</label>
                        <input type="password" class="form-input" id="PasswordResident" name="PasswordResident"
                            placeholder="Contraseña">
                    </div>
                    <div class="form-botton-end">
                        <button type="submit" class="form-buttom-back">Regresar</button>
                        <button type="submit" class="form-button">Actualizar</button>
                        </div>
    </div>
            <?php include_once("../../Assets/FooterForm.php") ?>
        </div>
</section>