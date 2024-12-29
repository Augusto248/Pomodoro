import { IniciarPomodoro } from "./iniciarPomodoro.js";
import { VentanaShortBreak } from "./ventanaShortBreak.js";
import { VentanaWork } from "./ventanaWork.js";


let btnWork = document.getElementById("BtnWork");
let btnShortBreak = document.getElementById("BtnShortBreak");
let btnStart = document.getElementById("BtnStart");

window.addEventListener("load", function (event) {
    CargarEventos();
});

function CargarEventos() {
    BtnWork();
    BtnShortBreak();
    BtnStart();
    HabilitarPermisosNotificacion();
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

