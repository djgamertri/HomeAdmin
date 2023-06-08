<?php 
include_once "../SendData.php";

var_dump($_POST);

$lastPage = $_SERVER['HTTP_REFERER'];

if(!empty($_POST)){
    if ($_POST["TaxValue"] && $_POST["TaxYear"]) {
        $data = json_decode(sendDataPost("http://localhost:3001/api/Tax",$_POST));
        echo "<h1>$data->TaxValue</h1>";
        if($data->TaxValue){
            header("location: $lastPage?complete=true");
        }else{
            header("location: $lastPage?complete=false");
        }
    }
}
?>