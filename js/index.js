import { IniciarPomodoro } from "./iniciarPomodoro.js";
import { VentanaShortBreak } from "./ventanaShortBreak.js";
import { VentanaWork } from "./ventanaWork.js";
import { CambiarTiempo } from "./cambiarTiempo.js";


let btnWork = document.getElementById("BtnWork");
let btnShortBreak = document.getElementById("BtnShortBreak");
let btnStart = document.getElementById("BtnStart");
let inputCronometro = document.getElementById("Cronometro");

window.addEventListener("load", function (event) {
    CargarEventos();
});

function CargarEventos() {
    HabilitarPermisosNotificacion();
    BtnWork();
    BtnShortBreak();
    BtnStart();
    InputCronometro();
}

function HabilitarPermisosNotificacion() {
    if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
}

function BtnWork() {
    btnWork.addEventListener("click", function () {
        VentanaWork();
    });
}


function BtnShortBreak() {
    btnShortBreak.addEventListener("click", function () {
        VentanaShortBreak();
    });
}


function BtnStart() {
    btnStart.addEventListener("click", function () {
        IniciarPomodoro();
    });
}

function InputCronometro() {
    inputCronometro.addEventListener("click", function () {
        this.value = "";
    });

    inputCronometro.addEventListener("input", function () {
        CambiarTiempo(this);
    });
}
