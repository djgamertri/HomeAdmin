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

//
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

//codigo nuevo
function CargarResidentesSinParqueadero() {
  const url = "/ResidentWithoutParking";
  FetchData(url, "GET").then((respuesta) => {
    const residentes = respuesta.data;
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
  });
  const li = document.querySelector(
    "li:contains('" + residente.NameUser + "')"
  );
  li.classList.add("active");
}

function AsignarResidente(residente, slot) {
  const url = "/Parking";
  const data = {
    NameUser: residente.NameUser,
    Plate: residente.Plate,
    Slot: slot,
  };

  FetchData(url, "POST", data).then((respuesta) => {
    if (respuesta.status === 200) {
      console.log("Residente asignado correctamente.");
      PintarTarjeta(slot, "#8bc34a", residente.NameUser, residente.Plate);
    } else {
      console.log("Error al asignar residente.");
    }
  });
}

const asignarParqueaderosButtonManual = document.getElementById(
  "asignarParqueaderosButton"
);
asignarParqueaderosButtonManual.addEventListener("click", () => {
  const ul = document.querySelector("#resident-list");
  const li = ul.querySelector(".active");
  const residente = li.textContent.split(" - ")[0];

  const slot = document.querySelector(".addToSlot").dataset.slot;

  AsignarResidente(residente, slot);
});
