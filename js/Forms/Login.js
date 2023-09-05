const Login = document.getElementById("Login")
const Email = document.getElementById("Email")
const Pass = document.getElementById("Pass")


function Enviar(e) {
    e.preventDefault()

    const data = {
        "Email": Email.value,
        "Pass": Pass.value
    }
    console.log(data);
    FetchData("/Login", "POST", data).then((respuesta) => {
        localStorage.setItem("Token", respuesta.token)
        
        if (Token) {
            const data = decodeToken(Token);
            switch(data.rol){
                case 'Usuario Normal':
                    window.location.replace("/views/23.html");
                break;
                case 'Administrador': 
                    window.location.replace("/views/Dashboard.html");
                break;
            }
        } else {
            console.log("No se encontró un token.");
        }
    });
}