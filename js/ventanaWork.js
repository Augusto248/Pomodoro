import { EndIntervaloTitulo } from "./iniciarPomodoro.js";

let cronometro = document.getElementById("Cronometro")
let btnWork = document.getElementById("BtnWork");
let btnShortBreak = document.getElementById("BtnShortBreak");
let pomodoro = document.getElementsByClassName("Pomodoro")[0];
let btnStart = document.getElementById("BtnStart");


export function VentanaWork() {
    CambiarTiempo();
    EstiloBotonActivo();
    CambiarColorDeFondo();
    CambiarTituloWork();
}


function CambiarTiempo() {
    cronometro.value = "20:00";
}

function EstiloBotonActivo() {
    btnShortBreak.classList.remove("Boton--Oscuro");
    btnShortBreak.classList.remove("Boton--Oscuro--Break");
    btnWork.classList.add("Boton--Oscuro");
    btnWork.classList.add("Boton--Oscuro--Work");
}

function CambiarColorDeFondo() {
    // Obtén el estilo computado del elemento root
    const rootStyles = getComputedStyle(document.documentElement);

    // Lee el valor de la variable CSS
    const mainColor = rootStyles.getPropertyValue('--primary-color').trim();
    const secondaryColor = rootStyles.getPropertyValue('--secondary-color').trim();


    document.body.style.backgroundColor = mainColor;
    pomodoro.style.backgroundColor = secondaryColor;
    btnStart.style.color = mainColor;
}


function CambiarTituloWork() {
    EndIntervaloTitulo();
    document.title = "Pomodoro";
}
