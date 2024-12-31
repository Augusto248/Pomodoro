import { SetIntervaloTitulo } from "./iniciarPomodoro.js";

let cronometro = document.getElementById("Cronometro")
let btnShortBreak = document.getElementById("BtnShortBreak");
let btnWork = document.getElementById("BtnWork");
let pomodoro = document.getElementsByClassName("Pomodoro")[0];
let btnStart = document.getElementById("BtnStart");


export function VentanaShortBreak() {
    LanzarNotificacion();
    CambiarTiempo();
    EstiloBotonActivo();
    CambiarColorDeFondo();
    CambiarTituloBreak();
}

function CambiarColorDeFondo() {
    const rootStyles = getComputedStyle(document.documentElement);
    const mainColor = rootStyles.getPropertyValue('--break-primary-color').trim();
    const secondaryColor = rootStyles.getPropertyValue('--break-secondary-color').trim();

    document.body.style.backgroundColor = mainColor;
    pomodoro.style.backgroundColor = secondaryColor;
    btnStart.style.color = mainColor;
}

function CambiarTiempo() {
    cronometro.value = "05:00";
}

function EstiloBotonActivo() {
    btnWork.classList.remove("Boton--Oscuro");
    btnWork.classList.remove("Boton--Oscuro--Work");

    btnShortBreak.classList.add("Boton--Oscuro");
    btnShortBreak.classList.add("Boton--Oscuro--Break");
}

function LanzarNotificacion() {

    if (Notification.permission === 'granted') {
        new Notification('Pomodoro finalizado', {
            body: "Time for break!",
            icon: 'https://example.com/icon.png' // Cambia esto por la URL de un ícono
        });
    }
}

function CambiarTituloBreak() {
    let textoCambiado = false;

    let intervaloTitulo = setInterval(() => {
        if (textoCambiado == false) {
            document.title = "00:00 Time for break";
            textoCambiado = true;
        }
        else {
            document.title = "------- Time for break";
            textoCambiado = false;
        }
    }, 1000);

    SetIntervaloTitulo(intervaloTitulo);
}


