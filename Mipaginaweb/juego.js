// juego.js

// Variables del juego
const words = ["javascript", "html", "css", "programacion", "desarrollador"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let maxTries = 6;
let tries = 0;

// Elementos del DOM
const wordDisplay = document.getElementById("word");
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const triesDisplay = document.getElementById("tries");

// Mostrar palabra oculta
function displayWord() {
    wordDisplay.innerHTML = chosenWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
}

// Manejar intento
function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (chosenWord.includes(guess)) {
        guessedLetters.push(guess);
    } else {
        tries++;
    }

    if (chosenWord.split('').every(letter => guessedLetters.includes(letter))) {
        message.innerHTML = "¡Ganaste!";
        guessButton.disabled = true;
    } else if (tries >= maxTries) {
        message.innerHTML = `Perdiste. La palabra era: ${chosenWord}`;
        guessButton.disabled = true;
    }

    displayWord();
    triesDisplay.innerHTML = `Intentos restantes: ${maxTries - tries}`;
}

// Inicializar juego
function initGame() {
    guessedLetters = [];
    tries = 0;
    displayWord();
    guessButton.disabled = false;
}

guessButton.addEventListener("click", handleGuess);

// Iniciar juego al cargar
window.onload = initGame;
