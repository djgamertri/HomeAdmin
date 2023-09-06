const eliminar=document.getElementById("delete")
const DeleteID = document.getElementById("DocUser")

function Enviar (){
    id=DeleteID.value
    console.log(id);
    FetchData(`/Register/${id}`,"DELETE").then((respuesta) => {
        const Token = localStorage.getItem("Token")
        if (Token) {
            const data = decodeToken();
            alert(respuesta);
        } 
        else {
            console.log("No se encontró un token.");
        }
    });
}
