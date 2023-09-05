const Update = document.getElementById("update")

const UpdateIdpay=document.getElementById("UpdatePayId")
const UpdatePay = document.getElementById("UpdatePayUser")
const UpdatedatePay= document.getElementById("UpdateDate")
const UpdatestatePay= document.getElementById("UpdateState")
const UpdatefilePay= document.getElementById("UpdateFile")


function Enviar(e) {
    e.preventDefault()

    const data = {
        "User" : UpdatePay.value,
        "Date" : UpdatedatePay.value,
        "State" : UpdatestatePay.value,
        "File" : UpdatefilePay.value,
        "Id" : UpdateIdpay.value
    }
    console.log(data)

    FetchData("/Pay", "PATCH", data).then((respuesta) => {

        const Token = localStorage.getItem("Token")
        if (Token) {
            const data = decodeToken();
            switch(data.rol){
                case 'Usuario Normal':
                    alert(respuesta)
                break;
                case 'Administrador': 
                    alert(respuesta)    
                break;
            }
        } 
        else {
            console.log("No se encontró un token.");
        }
    });
}