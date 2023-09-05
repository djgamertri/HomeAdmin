//Crea una interacción en la lista de navegación donde los elementos resaltan cuando el cursor pasa por encima de ellos
let list = document.querySelectorAll(".navegation li")

function activateLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}


list.forEach((item) => item.addEventListener("mouseover", activateLink))

//Menu hamburguesa
let toggle = document.querySelector(".toggle");
let navegation = document.querySelector(".navegation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navegation.classList.toggle("activate");
    main.classList.toggle("activate");
};
