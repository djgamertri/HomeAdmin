function Delete(id){
    FetchData("/Resident/"+id,"DELETE").then((respuesta) => {
        if(respuesta.StatusUser = 0){
            alert("Usuario eliminado Exitosamente")
        }
        fillTable()
    });
}
