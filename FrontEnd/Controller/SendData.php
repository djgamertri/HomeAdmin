<?php

function sendDataPost ($url,$data){
    // Convertir los datos en formato JSON
    $jsonData = json_encode($data);
    // Configurar la solicitud cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
        ));
     // Ejecutar la solicitud cURL
     $response = curl_exec($ch);

     // Verificar si ocurrió algún error
     if (curl_errno($ch)) {
         echo 'Error en la solicitud cURL: ' . curl_error($ch);
     }
 
     // Obtener el código de respuesta HTTP
     $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
 
     // Cerrar la conexión cURL
     curl_close($ch);
 
     // Procesar la respuesta
     if ($httpCode == 200) {
         return $response;
         // Hacer algo con los datos de respuesta...
     } else {
         // La solicitud no fue exitosa, manejar el error adecuadamente
         echo 'Error en la solicitud: ' . $httpCode;
     }
    
}

function sendDataGet ($url){
    // Configurar la solicitud cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Ejecutar la solicitud cURL
    $response = curl_exec($ch);

    // Verificar si ocurrió algún error
    if (curl_errno($ch)) {
        echo 'Error en la solicitud cURL: ' . curl_error($ch);
    }

    // Obtener el código de respuesta HTTP
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Cerrar la conexión cURL
    curl_close($ch);

    // Procesar la respuesta
    if ($httpCode == 200) {
        return $response;
        // Hacer algo con los datos de respuesta...
    } else {
        // La solicitud no fue exitosa, manejar el error adecuadamente
        echo 'Error en la solicitud: ' . $httpCode;
    }

}

function sendDataUpdate($url,$data){
    $jsonData = json_encode($data);
    // Configurar la solicitud cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'update');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
    ));

    // Ejecutar la solicitud cURL
    $response = curl_exec($ch);

    // Verificar si ocurrió algún error
    if (curl_errno($ch)) {
        echo 'Error en la solicitud cURL: ' . curl_error($ch);
    }

    // Obtener el código de respuesta HTTP
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Cerrar la conexión cURL
    curl_close($ch);

    // Procesar la respuesta
    if ($httpCode == 200) {
        return $response;
        // colocar una vista a la cual redireccione cuando el registro sea correcto
        // Hacer algo con los datos de respuesta...
    } else {
        // La solicitud no fue exitosa, manejar el error adecuadamente
        echo 'Error en la solicitud: ' . $httpCode;
    }


}

function sendDataDelete($url,$data){
    $jsonData = json_encode($data);
    // Configurar la solicitud cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'delete');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
    ));

    // Ejecutar la solicitud cURL
    $response = curl_exec($ch);

    // Verificar si ocurrió algún error
    if (curl_errno($ch)) {
        echo 'Error en la solicitud cURL: ' . curl_error($ch);
    }

    // Obtener el código de respuesta HTTP
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Cerrar la conexión cURL
    curl_close($ch);

    // Procesar la respuesta
    if ($httpCode == 200) {
        return $response;
        // colocar una vista a la cual redireccione cuando el registro sea correcto
        // Hacer algo con los datos de respuesta...
    } else {
        // La solicitud no fue exitosa, manejar el error adecuadamente
        echo 'Error en la solicitud: ' . $httpCode;
    }

}

?>
