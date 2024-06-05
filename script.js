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

// Generador de citas aleatorias
const quotes = [
    "Frase 1Frase 1Frase 1Frase blablablabla",
    "Frase 2",
    "Frase 3",
    "Frase 4",
    "Frase 5"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quote;
}

function displayWithButton(text_id){
	var texto = document.getElementById(text_id);
    if (texto.style.display === "none") {
        texto.style.display = "initial";
    } else {
        texto.style.display = "none";
    }
}

setInterval(generateQuote, 10000); // Cambia la cita cada 10 segundos
generateQuote();