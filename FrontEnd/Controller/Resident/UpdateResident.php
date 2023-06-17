<?php
include_once "../SendData.php";

$lastPage = $_SERVER['HTTP_REFERER'];


if(!empty($_POST)){
    if ($_POST["Name"]) {
        $id = $_POST["Id"];
        $data = json_decode(sendDataUpdate("http://localhost:3001/api/Resident?id=$id",$_POST));
        if($data->NameResident){
            header("location: $lastPage?complete=true");
        }else{
            header("location: $lastPage?complete=false");
        }
    }
}

?>