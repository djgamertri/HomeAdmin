const Update = document.getElementById("update")

const updateU = document.getElementById("UpdateNameResident")
const updateBirth= document.getElementById("UpdateBornResident")
const updateTypeDoc= document.getElementById("UpdateTypeDocumentResident")
const updateNumDoc= document.getElementById("UpdateIdResident")
const updatePhone= document.getElementById("UpdatePhoneNumberResident")
const updateEmail=document.getElementById("UpdateEmailResident")
const updateHouse=document.getElementById("UpdateNumberHouseResident")
const updateRole=document.getElementById("UpdateRol")
const updatePass = document.getElementById("UpdatePasswordResident")
const updateState = document.getElementById("UpdateState")
const IdUpdate = document.getElementById("IdUser")

function Enviar(e) {
    e.preventDefault()

    const data = {
        "Id" : IdUpdate.value,
        "Pass" : updatePass.value,
        "TypeDocument" : updateTypeDoc.value,
        "NumDocument" : updateNumDoc.value,
        "Name" : updateU.value,
        "Birthday" : updateBirth.value,
        "Phone" : updatePhone.value,
        "Email" : updateEmail.value,
        "NumberHouse" : updateHouse.value,
        "Rol" : updateRole.value,
        "State" : updateState.value
    }

    console.log(data)

    FetchData("/Resident", "PATCH", data).then((respuesta) => {

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