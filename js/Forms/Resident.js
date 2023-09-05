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

function enviar (e){
    e.preventDefault()

    const data={
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
    SendData(data);
}

function SendData(dataPost){
    localStorage.setItem("Token", respuesta.token)
    if(Token){
        const data = decodeToken(Token);
        switch (data.rol) {
            case 'Administrador':
                FetchData("/Register","POST", dataPost).then((respuesta)=>{
                    alert(respuesta)
                });
                break;
            case 'Usuario Normal':
                    alert("NO PUEDES REGISTRAR USUARIOS D:<")
            break;
        } 
    }
    else{
        console.log("No se encontró un token.");

    }
}