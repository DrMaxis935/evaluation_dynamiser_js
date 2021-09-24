let totalScorePlayer1 = 0;
let currentScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentScorePlayer2 = 0;
let diceRoll = 0;
let playerTurn = 0;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addScore() {
  if (playerTurn == 0) {
    currentScorePlayer1 += randomInteger(0, 12);
    document.getElementById("randomScoreValue");
    document.getElementById("randomScoreValue").innerHTML = currentScorePlayer1;
    //.setAttribute("value", currentScorePlayer1);
  } else {
    currentScorePlayer2 += randomInteger(0, 12);
    document
      .getElementById("randomScoreValue")
      .setAttribute("text", currentScorePlayer2);
  }
}

document.getElementById("randomScore").addEventListener("click", addScore);
