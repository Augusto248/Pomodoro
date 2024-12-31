export function CambiarTiempo(inputCronometro) {

    // Elimina caracteres no numéricos excepto ":"
    let valor = inputCronometro.value.replace(/[^0-9:]/g, "");

    // Formatea automáticamente mientras escribe
    if (valor.length >= 2 && !valor.includes(":")) {
        valor = valor.slice(0, 2) + ":" + valor.slice(2);
    }

    // Limita a 5 caracteres
    if (valor.length > 5) {
        valor = valor.slice(0, 5);
    }

    // Actualiza el valor en el input
    inputCronometro.value = valor;
}