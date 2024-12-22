let cronometro = document.getElementById("Cronometro")
let btnShortBreak = document.getElementById("BtnShortBreak");
let btnWork = document.getElementById("BtnWork");
let pomodoro = document.getElementsByClassName("Pomodoro")[0];

export function VentanaShortBreak() {
    CambiarTiempo();
    EstiloBotonActivo();
    CambiarColorDeFondo();
}

function CambiarColorDeFondo() {
    const rootStyles = getComputedStyle(document.documentElement);
    const mainColor = rootStyles.getPropertyValue('--break-primary-color').trim();
    const secondaryColor = rootStyles.getPropertyValue('--break-secondary-color').trim();

    document.body.style.backgroundColor = mainColor;
    pomodoro.style.backgroundColor = secondaryColor;
}

function CambiarTiempo() {
    cronometro.textContent = "05:00";
}

function EstiloBotonActivo() {
    btnWork.classList.remove("Boton--Oscuro");
    btnWork.classList.remove("Boton--Oscuro--Work");

    btnShortBreak.classList.add("Boton--Oscuro");
    btnShortBreak.classList.add("Boton--Oscuro--Break");
}