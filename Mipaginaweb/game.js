// game.js
const word = "Doctor"; // La palabra que los jugadores deben adivinar
const hint = "Es una profesión que salva vidas"; // Pista para la palabra

let displayedWord = "_".repeat(word.length);
document.getElementById('word').textContent = displayedWord;
document.getElementById('hint').textContent = hint;

function makeGuess() {
    const guess = document.getElementById('guess').value;
    if (guess.length === 1) {
        let newDisplayedWord = "";
        for (let i = 0; i < word.length; i++) {
            newDisplayedWord += (word[i].toLowerCase() === guess.toLowerCase()) ? word[i] + " " : displayedWord[i*2] + " ";
        }
        displayedWord = newDisplayedWord.trim();
        document.getElementById('word').textContent = displayedWord;
    }
}
