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
    "“The key to success with AI is not just having the right data, but also asking the right questions.” – Ginni Rometty",
    "“The idea that machines can’t do things humans can is a pure myth.” – Marvin Minsky",
    "“AI will not make us obsolete, but it will make us superhuman.” – Max Tegmark",
    "“Competition for AI superiority at national level is the most likely cause of WW3.” — Elon Musk",
    "“A year spent in artificial intelligence is enough to make one believe in God.” —Alan Perlis"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quote;
}

function displayWithButton(text_id, button_id){
	var texto = document.getElementById(text_id, button_id);
	var button = document.getElementById(button_id);
    if (texto.style.display === "none") {
        texto.style.display = "initial";
        button.classList.add('active-button');
    } else {
        texto.style.display = "none";
        button.classList.remove('active-button');
    }
}

setInterval(generateQuote, 10000); // Cambia la cita cada 10 segundos
generateQuote();
