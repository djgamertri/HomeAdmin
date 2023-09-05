const Regist = document.getElementById("register")

const userPay = document.getElementById("NameUser")
const datePay= document.getElementById("Date")
const statePay= document.getElementById("State")
const filePay= document.getElementById("File")


function Enviar(e) {
    e.preventDefault()

    const data = {
        "IdUser" : userPay.value,
        "RegistDate" : datePay.value,
        "StatusPayAdmin" : statePay.value,
        "FilePayAdmin" : filePay.value,
    }

    FetchData("/Pay", "POST", data).then((respuesta) => {

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