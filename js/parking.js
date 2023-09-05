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

    const indiceAleatorio = Math.floor(Math.random() * parqueaderosDisponibles.length);
    const parqueaderoAsignado = parqueaderosDisponibles.splice(indiceAleatorio,1)[0];

    registro.parqueadero = parqueaderoAsignado;

    asignaciones.push({
      usuario: registro.NameUser,
      casa: registro.NumHouse,
      placa: registro.Plate,
      parqueadero: parqueaderoAsignado,
    });

    PintarTarjeta(parqueaderoAsignado, "#8bc34a", registro.NameUser, registro.Plate);
  });

  return asignaciones;
}

function ParqueaderosEnUso(datos) {
  datos.forEach((registro) => {
    const parqueaderoAsignado = registro.Slot;

    PintarTarjeta(parqueaderoAsignado, "#e91e63", registro.NameUser, registro.Plate);
  });
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
    const Number = tarjeta.querySelector(".numbers")
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
    const Number = card.querySelector(".numbers")
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
        alert(respuesta)
    });
}

const buttonSave = document.getElementById("Save")

buttonSave.addEventListener("click", () => {
    Enviar(parqueaderosAsignados)
});

const asignarParqueaderosButton = document.getElementById("asignarParqueaderosButton");

asignarParqueaderosButton.addEventListener("click", () => {
  parqueaderosAsignados = asignarParqueaderos(parqueaderosData);
  ParqueaderosEnUso(parqueaderosEnUsoData);
});