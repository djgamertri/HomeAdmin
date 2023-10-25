let parqueaderosData = null;
let parqueaderosEnUsoData = null;
let parqueaderosAsignados = [];

FetchData("/ResidentWithOutParking", "GET").then((respuesta) => {
  parqueaderosData = respuesta;
});

FetchData("/ResidentWithParking", "GET").then((respuesta) => {
  parqueaderosEnUsoData = respuesta;
  ParqueaderosEnUso(parqueaderosEnUsoData);
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

const buttonSave = document.getElementById("Save");

buttonSave.addEventListener("click", () => {
  Enviar(parqueaderosAsignados);
});

const asignarParqueaderosButton = document.getElementById(
  "asignarParqueaderosButton"
);

asignarParqueaderosButton.addEventListener("click", () => {
  parqueaderosAsignados = asignarParqueaderos(parqueaderosData);
  ParqueaderosEnUso(parqueaderosEnUsoData);
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const cardId = card.id;
    if (Disponibles().includes(parseInt(cardId))) {
      const addToSlot = card.querySelector(".addToSlot");
      addToSlot.style.display = "block";
      const number = card.querySelector(".numbers");
      number.style.display = "none";
      //console.log("El slot seleccionado está disponible.");
    } else {
      const addToSlot = card.querySelector(".addToSlot");
      addToSlot.style.display = "none";
      //console.log("El slot seleccionado está ocupado.");
    }
  });

  card.addEventListener("mouseout", () => {
    const number = card.querySelector(".numbers");
    number.style.display = "block";
    const addToSlot = card.querySelector(".addToSlot");
    addToSlot.style.display = "none";
  });
});

// Agrega un evento al elemento `li` de la lista para seleccionar el residente
residentList.addEventListener("click", (event) => {
  // Selecciona el elemento `li` que recibió el click
  const selectedLi = event.target;

  // Establece la clase `active` en el elemento seleccionado
  selectedLi.classList.add("active");

  // Elimina la clase `active` de los demás elementos `li`
  residentList.querySelectorAll("li").forEach((li) => {
    if (li !== selectedLi) {
      li.classList.remove("active");
    }
  });
});

// Agrega un evento al botón de "Asignar" del modal para asignar el residente seleccionado al slot correspondiente
modal-content.querySelector(".btn-asignar").addEventListener("click", () => {
  const selectedResident = modal-content.querySelector(
    "#resident-list li.active"
  );
  const slotId = e.target.closest(".card").id;

  // Asigna el residente al slot
  parqueaderosAsignados.push({
    usuario: selectedResident.textContent,
    parqueadero: slotId,
  });

  // Pinta el slot como asignado
  PintarTarjeta(slotId, "#8bc34a", selectedResident.textContent);
});

// Agrega un evento a los botones de "Agregar" de los slots disponibles para abrir el modal
document.querySelectorAll(".card .addToSlot").forEach((button) => {
  button.addEventListener("click", () => {
    // Carga la lista de residentes sin parqueadero en el modal
    FetchData("/ResidentWithOutParking", "GET").then((respuesta) => {
      const residentList = modal - content.querySelector("#resident-list");
      residentList.innerHTML = "";

      respuesta.forEach((residente) => {
        const listItem = document.createElement("li");
        listItem.textContent = residente.NameUser;
        listItem.classList.add("list-group-item");

        residentList.appendChild(listItem);
      });
    });
  });
});
