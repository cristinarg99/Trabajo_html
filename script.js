// script.js

// Función para actualizar el reloj en tiempo real
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Llamada inicial para que no haya retraso
