const Regist = document.getElementById("register")
const nameU = document.getElementById("NameResident")
const birth= document.getElementById("DateBornResident")
const typeDoc= document.getElementById("TypeDocumentResident")
const numDoc= document.getElementById("IdResident")
const phone= document.getElementById("PhoneNumberResident")
const email=document.getElementById("EmailResident")
const house=document.getElementById("NumberHouseResident")
const role=document.getElementById("Rol")
const pass = document.getElementById("PasswordResident")
const state = document.getElementById("State")

function Enviar(e) {
    e.preventDefault()

    const data = {
        "Pass" : pass.value,
        "TypeDoc" : typeDoc.value,
        "NumDoc" : numDoc.value,
        "NameUser" : nameU.value,
        "BirthDate" : birth.value,
        "Phone" : phone.value,
        "Email" : email.value,
        "NumHouse" : house.value,
        "Roleuser" : role.value,
        "StatusUser" : state.value
    }

    FetchData("/Register", "POST", data).then((respuesta) => {

        const Token = localStorage.getItem("Token")
        if (Token) {
            const data = decodeToken();
            switch(data.rol){
                case 'Usuario Normal':
                    alert('NO puedes hacer solicitudes de este tipo')
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