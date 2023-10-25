let parqueaderosData = null;
let parqueaderosEnUsoData = null;
let parqueaderosAsignados = [];
let residenteSeleccionado = null;
const asignarParqueaderosButtonManual = document.getElementById("btn-asignar");
const buttonSave = document.getElementById("Save");
const asignarParqueaderosButton = document.getElementById("asignarParqueaderosButton");
const cards = document.querySelectorAll(".card");

FetchData("/ResidentWithOutParking", "GET").then((respuesta) => {
  parqueaderosData = respuesta;
});

FetchData("/ResidentWithParking", "GET").then((respuesta) => {
  parqueaderosEnUsoData = respuesta;
  ParqueaderosEnUso(parqueaderosEnUsoData);
  console.log(respuesta)
});

function asignarParqueaderos(datos) {
  LimpiarEstilos();
  const asignaciones = [];
  const parqueaderosDisponibles = Disponibles();

  datos.forEach((registro) => {
    if (parqueaderosDisponibles.length === 0) {
      console.log("No quedan parqueaderos disponibles.");
      return;
    }

    const indiceAleatorio = Math.floor(
      Math.random() * parqueaderosDisponibles.length
    );
    const parqueaderoAsignado = parqueaderosDisponibles.splice(
      indiceAleatorio,
      1
    )[0];

    registro.parqueadero = parqueaderoAsignado;

    asignaciones.push({
      usuario: registro.NameUser,
      casa: registro.NumHouse,
      placa: registro.Plate,
      parqueadero: parqueaderoAsignado,
    });

    PintarTarjeta(
      parqueaderoAsignado,
      "#8bc34a",
      registro.NameUser,
      registro.Plate
    );
  });

  return asignaciones;
}

function ParqueaderosEnUso(datos) {
  datos.forEach((registro) => {
    const parqueaderoAsignado = registro.Slot;

    PintarTarjeta(
      parqueaderoAsignado,
      "#e91e63",
      registro.NameUser,
      registro.Plate
    );
  });

  console.log(datos);
}

function Disponibles() {
  const parqueaderos = Array.from({ length: 32 }, (_, index) => index + 1);
  const parqueaderosEnUso = [];

  parqueaderosEnUsoData.forEach((item) => {
    parqueaderosEnUso.push(item.Slot);
  });

  return parqueaderos.filter(
    (parqueadero) => !parqueaderosEnUso.includes(parqueadero)
  );
}

function PintarTarjeta(parqueaderoId, color, nameUser, placa) {
  const tarjeta = document.getElementById(parqueaderoId.toString());
  if (tarjeta) {
    tarjeta.style.backgroundColor = color;
    const Number = tarjeta.querySelector(".numbers");
    const placaElement = tarjeta.querySelector(".cardPlaca");
    const nameUserElement = tarjeta.querySelector(".NameUser");
    Number.style.color = "#fff";
    placaElement.textContent = placa;
    nameUserElement.textContent = nameUser;
  }
}

function LimpiarEstilos() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const Number = card.querySelector(".numbers");
    const placa = card.querySelector(".cardPlaca");
    const nameUser = card.querySelector(".NameUser");
    card.style.backgroundColor = "";
    Number.style.color = "";
    placa.textContent = "";
    nameUser.textContent = "";
  });
}

function Enviar(parqueaderosAsignados) {
  FetchData("/Parking", "POST", parqueaderosAsignados).then((respuesta) => {
    alert(respuesta);
  });
}


//
buttonSave.addEventListener("click", () => {
  Enviar(parqueaderosAsignados);
});

asignarParqueaderosButton.addEventListener("click", () => {
  parqueaderosAsignados = asignarParqueaderos(parqueaderosData);
  ParqueaderosEnUso(parqueaderosEnUsoData);
});

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const cardId = card.id;
    if (Disponibles().includes(parseInt(cardId))) {
      const addToSlot = card.querySelector(".addToSlot");
      addToSlot.style.display = "block";
      addToSlot.dataset.slot = cardId; // Guarda el id del slot en el dataset
      const number = card.querySelector(".numbers");
      number.style.display = "none";

      // Agrega un evento de clic para abrir el modal y cargar los residentes
      addToSlot.addEventListener("click", () => {
        CargarResidentesSinParqueadero();
        const modal = document.getElementById("modal1");
        modal.style.display = "block";
      });
    } else {
      const addToSlot = card.querySelector(".addToSlot");
      addToSlot.style.display = "none";
    }
  });
});

//codigo nuevo
function CargarResidentesSinParqueadero() {
  const url = "/ResidentWithoutParking";
  FetchData(url, "GET").then((respuesta) => {
    const residentes = respuesta; // Usa directamente la respuesta de la API
    const ul = document.querySelector("#resident-list");
    ul.innerHTML = "";
    residentes.forEach((residente) => {
      const li = document.createElement("li");
      li.textContent = residente.NameUser + " - " + residente.Plate;
      li.addEventListener("click", () => {
        SeleccionarResidente(residente);
      });
      ul.appendChild(li);
    });
  });
}

function SeleccionarResidente(residente) {
  const ul = document.querySelector("#resident-list");
  ul.querySelectorAll("li").forEach((li) => {
    li.classList.remove("active");
    if (li.textContent.includes(residente.NameUser)) {
      li.classList.add("active");
    }
  });

  // Guarda el residente seleccionado en una variable global
  residenteSeleccionado = residente;
}


asignarParqueaderosButtonManual.addEventListener("click", () => {
  if (residenteSeleccionado) {
    const slot = document.querySelector(".addToSlot").dataset.slot;
    AsignarResidente(residenteSeleccionado, slot);
  } else {
    console.log("No se ha seleccionado ningún residente.");
  }
});

function AsignarResidente(residente, slot) {
  const url = "/Parking";
  const data = [{
    parqueadero: slot,
    placa: residente.Plate,
  }];

  FetchData(url, "POST", data).then((respuesta) => {
    if (respuesta.status === 200) {
      console.log("Residente asignado correctamente.");
      PintarTarjeta(slot, "#8bc34a", residente.NameUser, residente.Plate);
      // Cierra el modal después de asignar el parqueadero
      const modal = document.getElementById("modal1");
      modal.style.display = "none";
    } else {
      console.log("Error al asignar residente.");
    }
  });
}
