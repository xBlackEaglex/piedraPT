const botones1 = document.getElementById("botones1");
const botones2 = document.getElementById("botones2");
const piedra1 = document.getElementById("piedra1");
const papel1 = document.getElementById("papel1");
const tijera1 = document.getElementById("tijera1");
const piedra2 = document.getElementById("piedra2");
const papel2 = document.getElementById("papel2");
const tijera2 = document.getElementById("tijera2");
const ganador = document.getElementById("ganador");
const volver = document.getElementById("volver");
const text = document.getElementById("text");
const resultados = document.querySelector(".resultado");

botones2.style.display = "none";
resultados.style.display = "none";

var seleccion1 = "";
var seleccion2 = "";

// Función para determinar el ganador del juego
function determinarGanador(jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "Empate";
    } else if (
        (jugada1 === "piedra" && jugada2 === "tijera") ||
        (jugada1 === "papel" && jugada2 === "piedra") ||
        (jugada1 === "tijera" && jugada2 === "papel")
    ) {
        return "Jugador 1";
    } else {
        return "Jugador 2";
    }
}

// Función para manejar el evento de clic en los botones
function manejarClicJugador1(e) {
    seleccion1 = e.currentTarget.classList.value;
    console.log(seleccion1);
    botones1.style.display = "none";
    botones2.style.display = "flex";
}

function manejarClicJugador2(e) {
    seleccion2 = e.currentTarget.classList.value;
    console.log(seleccion2);
    botones2.style.display = "none";
    const resultado = determinarGanador(seleccion1, seleccion2);
    if (resultado === "Empate") {
        resultados.style.display = "grid";
        text.style.display = "none";
        ganador.textContent = resultado;
    } else {
        resultados.style.display = "grid";
        ganador.textContent = resultado;
    }
}

function inicio() {
  botones1.style.display = "flex";
  resultados.style.display = "none";
}

// Agregar manejadores de eventos a los botones del jugador 1
piedra1.addEventListener("click", manejarClicJugador1);
papel1.addEventListener("click", manejarClicJugador1);
tijera1.addEventListener("click", manejarClicJugador1);
piedra2.addEventListener("click", manejarClicJugador2);
papel2.addEventListener("click", manejarClicJugador2);
tijera2.addEventListener("click", manejarClicJugador2);
volver.addEventListener("click", inicio);
