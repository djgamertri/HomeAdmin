<?php 
include_once("../../Controller/SendData.php");

$data = json_decode(sendDataGet("http://localhost:3001/api/Residents"));

?>
<section class="home">
    <div class="text">
        <div class="Container">
            <table>
                <h1 style="text-align: center; margin: 20px">Usuarios</h1>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo de documento</th>
                        <th>Nombre</th>
                        <th>Nacimiento</th>
                        <th>Numero</th>
                        <th>Email</th>
                        <th>Casa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if(!empty($data)){
                        foreach ($data as $item) {
                    ?>
                        <tr>
                            <td><?php echo $item->IdResident?></td>
                            <td><?php echo $item->TypeDocumentResident?></td>
                            <td><?php echo $item->NameResident?></td>
                            <td><?php echo $item->DateBornResident?></td>
                            <td><?php echo $item->PhoneNumberResident?></td>
                            <td><?php echo $item->EmailResident?></td>
                            <td><?php echo $item->NumberHouseResident?></td>
                            <td class="actions"> <i class='bx bxs-edit edit' ></i> | <i class='bx bxs-trash trash'></i> </td>
                        </tr>
                    <?php
                        }
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</section>