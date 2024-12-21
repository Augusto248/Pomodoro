import { IniciarPomodoro } from "./IniciarPomodoro.js";
import { VentanaShortBreak } from "./VentanaShortBreak.js";
import { VentanaWork } from "./VentanaWork.js";


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
}

function BtnWork(){
    btnWork.addEventListener("click", function(){
       VentanaWork(); 
    });
}


function BtnShortBreak(){
    btnShortBreak.addEventListener("click", function(){
        VentanaShortBreak();
    });
}


function BtnStart() {
    btnStart.addEventListener("click", function () {
        IniciarPomodoro();
    });
}

