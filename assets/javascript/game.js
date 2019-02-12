
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");

var wordArray = ["Super Smash Bros Melee", "Wind Waker", "Paper Mario", "Pikman", "Super Mario Sunshine", "Metroid Prime", " Fire Emblem"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = "";
var pickedWordPlaceholderArray = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

function newGame() {
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArray = [];

    pickedWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    for (var i = 0; i < pickedWord.length; i++) {

        if(pickedWord[i] === " ") {
            pickedWordPlaceholderArray.push(" ");
        } else {
            pickedWordPlaceholderArray.push("_")
        }
    }
$guessesLeft.textContent = guessesLeft;
$placeholders.textContent = pickedWordPlaceholderArray.join("");
$guessedLetters.textContent = incorrectLetterBank;
}

$newGameButton.addEventListener("click", newGame);

