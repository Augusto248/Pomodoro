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
    cronometro.textContent = "00:02";
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


