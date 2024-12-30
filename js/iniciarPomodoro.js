import { VentanaShortBreak } from "./ventanaShortBreak.js";
import { VentanaWork } from "./ventanaWork.js";


let intervalo;
let intervaloTitulo;
let cronometro = document.getElementById("Cronometro")
let btn = document.getElementById("BtnStart");
let btnWork = document.getElementById("BtnWork");

export function SetIntervaloTitulo(nuevoValor) {
    intervaloTitulo = nuevoValor;
}

export function EndIntervaloTitulo() {
    clearInterval(intervaloTitulo);
}

export function IniciarPomodoro() {
    let activo = ObtenerEstadoBoton();
    EfectoPresionarBoton(activo);
    CambiarTextoBoton(activo);
    AplicarCronometro(activo);
}

function ObtenerEstadoBoton() {
    if (btn.innerText == "START") {
        return true;
    }

    else {
        return false;
    }
}

function EfectoPresionarBoton(activo) {
    ReproducirSonido("assets/button-click-3.mp3");

    if (activo == true) {
        btn.style.height = "100%";
    }

    else {
        btn.style.height = "90%"
    }
}

function CambiarTextoBoton(activo) {
    if (activo == true) {
        btn.innerText = "PAUSE";
    }

    else {
        btn.innerText = "START"
    }
}


function AplicarCronometro(activo) {
    if (activo == true) {
        StartCronometro();
    }

    else {
        PauseCronometro();
    }
}


function StartCronometro() {
    let segundos = ObtenerSegundos();
    intervalo = setInterval(() => {
        if (segundos > 0) {
            segundos--;
            ActualizarCronometro(segundos);
        } else {
            FinalizarCronometro();
        }
    }, 1000);
}

function FinalizarCronometro() {
    clearInterval(intervalo);
    ReproducirSonido("assets/time-to-break-4.mp3");
    EfectoPresionarBoton(false);
    CambiarTextoBoton(false);
    CambiarVentana();
}

function CambiarVentana() {
    let ventanaWorkActiva = VentanaWorkSeEncuentraActiva();
    if (ventanaWorkActiva == true) {
        VentanaShortBreak();
    }

    else {
        VentanaWork();
    }
}

function VentanaWorkSeEncuentraActiva() {
    if (btnWork.classList.contains("Boton--Oscuro")) {
        return true;
    }

    return false;
}



function ReproducirSonido(rutaArchivo) {
    const sonido = new Audio(rutaArchivo);
    sonido.play();
}

function ObtenerSegundos() {
    let tiempo = cronometro.textContent;
    let [minutos, segundos] = tiempo.split(":").map(Number);
    return minutos * 60 + segundos;
}


function ActualizarCronometro(segundos) {
    let minutosRestantes = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;

    // Asegura que los números siempre tengan dos dígitos
    cronometro.textContent =
        `${minutosRestantes.toString().padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
}


function PauseCronometro() {
    clearInterval(intervalo); // Detiene el intervalo
}