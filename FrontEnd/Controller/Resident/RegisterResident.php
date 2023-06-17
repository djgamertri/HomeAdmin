<?php

include_once "../SendData.php";

$lastPage = $_SERVER['HTTP_REFERER'];

if(!empty($_POST)){
    if ($_POST["Name"]) {
        $data = json_decode(sendDataPost("http://localhost:3001/api/Resident",$_POST));
        if($data->NameResident){
            header("location: $lastPage?complete=true");
        }else{
            header("location: $lastPage?complete=false");
        }
    }
}

?>