var randomLetter = "";
var list = "abcdefghijklmnopqrstuvwxyz";
randomLetter = list.charAt(Math.floor(Math.random() * list.length));

var winCount  = 0;
var loseCount = 0;
var guesses   = 9;
var userGuesses = 0;
var userGuessesArray = [];

document.addEventListener("keypress", function(event){
    var pressedKey = event.key
    if (pressedKey === randomLetter) {
        alert ("You win!");
        winCount++;
        guesses = 9
        userGuesses = 0;
        userGuessesArray = [];
        document.getElementById("wins").innerHTML = "Wins: " + winCount;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: 9";
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;
        randomLetter = list.charAt(Math.floor(Math.random() * list.length));
    } else {
        guesses --;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        userGuessesArray[userGuesses] = pressedKey;
        userGuesses++;
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;
    }
    if (guesses === 0) {
        alert ("You lose!");
        loseCount++;
        guesses = 9;
        userGuesses = 0;
        userGuessesArray = [];
        document.getElementById("losses").innerHTML = "Losses: " + loseCount;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: 9";
        document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuessesArray;
        randomLetter = list.charAt(Math.floor(Math.random() * list.length));
    }
});