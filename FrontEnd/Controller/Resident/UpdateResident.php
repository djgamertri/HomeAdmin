<?php

echo "hola";
var_dump($_POST);

// call UpdateResident(1013260718,"Andres Fernando Malagon","2005-12-20","Cedula de Ciudadania",3212946031,"andresfernandoxd1591@gmail.com",'Inactivo',175);

include_once "../SendData.php";

$lastPage = $_SERVER['HTTP_REFERER'];
$id = 1;

if(!empty($_POST)){
    if ($_POST["NameResident"]) {
        $data = json_decode(sendDataUpdate("http://localhost:3001/api/Resident?id=$id",$_POST));
        if($data->NameResident){
            header("location: $lastPage?complete=true");
        }else{
            header("location: $lastPage?complete=false");
        }
    }
}


?>