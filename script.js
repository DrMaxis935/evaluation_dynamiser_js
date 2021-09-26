const dice = document.getElementById("dice");
const labelCurrentScoreP1 = document.getElementById("currentScoreP1");
const labelCurrentScoreP2 = document.getElementById("currentScoreP2");
const labelTotalScoreP1 = document.getElementById("player1Score");
const labelTotalScoreP2 = document.getElementById("player2Score");
const playerName1 = document.getElementById("playerName1");
const playerName2 = document.getElementById("playerName2");
const container = document.getElementById("mainContainer");
const rollDiceButton = document.getElementById("rollDice");
const holdButton = document.getElementById("hold");
const newGameButton = document.getElementById("newGame");

let gameLaunched = false;
let totalScorePlayer1 = 0;
let currentScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentScorePlayer2 = 0;
let diceRoll = 0;
let playerTurn = false;
let diceSideToDisplay = 1;
let localScore = 0;

if (gameLaunched == false) {
  rollDiceButton.innerHTML =
    ' <button type="button" class="btn btn-light" id="rollDice" disabled><img class="Icons" src="./icons/arrow-repeat.svg" />ROLL DICE</button>';
  holdButton.innerHTML =
    ' <button type="button" class="btn btn-light" id="hold" disabled> <img class="Icons" src="./icons/box-arrow-in-down.svg" />HOLD </button>';
}

function newGame() {
  resetCurrentScore();
  resetTotalScore();
  swapPlayerTurn();
  swapDiceSide();
  gameLaunched = true;
  rollDiceButton.innerHTML =
    ' <button type="button" class="btn btn-light" id="rollDice" ><img class="Icons" src="./icons/arrow-repeat.svg" />ROLL DICE</button>';
  holdButton.innerHTML =
    ' <button type="button" class="btn btn-light" id="hold" > <img class="Icons" src="./icons/box-arrow-in-down.svg" />HOLD </button>';
  newGameButton.innerHTML =
    '<button type="button" class="btn btn-light" id="newGame" disabled><img class="Icons" src="./icons/plus-circle.svg" />NEW GAME</button>';
  localScore = 1;
}

function rollDice(min, max) {
  localScore = Math.floor(Math.random() * (max - min + 1)) + min;
  diceSideToDisplay = localScore;
  swapDiceSide();
  return localScore;
}

function swapDiceSide() {
  switch (localScore) {
    case 1:
      dice.setAttribute("src", "./Images/dice-1.png");
      dice.style.animation = "shake 1s linear ";
      setTimeout(function () {
        dice.style.animation = "";
      }, 1000);

      break;
    case 2:
      dice.setAttribute("src", "./Images/dice-2.png");
      break;
    case 3:
      dice.setAttribute("src", "./Images/dice-3.png");
      break;
    case 4:
      dice.setAttribute("src", "./Images/dice-4.png");
      break;
    case 5:
      dice.setAttribute("src", "./Images/dice-5.png");
      break;
    case 6:
      dice.setAttribute("src", "./Images/dice-6.png");
      break;
  }
}

function addScore() {
  let diceRoll = rollDice(1, 6);
  if (playerTurn) {
    currentScorePlayer1 += diceRoll;
    if (diceRoll == 1) {
      currentScorePlayer1 = 0;
      labelCurrentScoreP1.innerHTML = 0;
      swapPlayerTurn();
    } else {
      labelCurrentScoreP1.innerHTML = currentScorePlayer1;
    }
  } else {
    currentScorePlayer2 += diceRoll;
    if (diceRoll == 1) {
      currentScorePlayer2 = 0;
      labelCurrentScoreP2.innerHTML = 0;
      swapPlayerTurn();
    } else {
      labelCurrentScoreP2.innerHTML = currentScorePlayer2;
    }
  }
}

function swapPlayerTurn() {
  if (playerTurn) {
    playerTurn = false;
    playerName1.innerHTML = "<h2>PLAYER 1<h2>";
    playerName2.innerHTML += '<div class="dot"></div>';
  } else {
    playerTurn = true;
    playerName1.innerHTML += '<div class="dot"></div>';
    playerName2.innerHTML = "<h2>PLAYER 2<h2>";
  }
}

function resetCurrentScore() {
  currentScorePlayer1 = 0;
  labelCurrentScoreP1.innerHTML = currentScorePlayer1;
  currentScorePlayer2 = 0;
  labelCurrentScoreP2.innerHTML = currentScorePlayer2;
}

function resetTotalScore() {
  totalScorePlayer1 = 0;
  labelTotalScoreP1.innerHTML = totalScorePlayer1;
  totalScorePlayer2 = 0;
  labelTotalScoreP2.innerHTML = totalScorePlayer2;
}

function addToGeneralScore() {
  if (playerTurn) {
    totalScorePlayer1 += currentScorePlayer1;
    labelTotalScoreP1.innerHTML = totalScorePlayer1;
    resetCurrentScore();
    swapPlayerTurn();
  } else {
    totalScorePlayer2 += currentScorePlayer2;
    labelTotalScoreP2.innerHTML = totalScorePlayer2;
    resetCurrentScore();
    swapPlayerTurn();
  }
  playerWon();
}

function playerWon() {
  if (totalScorePlayer1 >= 100) {
    gameLaunched = false;
    playerName1.innerHTML += '<div class="dotWin"></div>';
    playerName2.innerHTML = "<h2>PLAYER 2<h2>";
  }
  if (totalScorePlayer2 >= 100) {
    gameLaunched = false;
    playerName1.innerHTML = "<h2>PLAYER 1<h2>";
    playerName2.innerHTML += '<div class="dotWin"></div>';
  }

  if (!gameLaunched) {
    rollDiceButton.innerHTML =
      ' <button type="button" class="btn btn-light" id="rollDice" disabled ><img class="Icons" src="./icons/arrow-repeat.svg" />ROLL DICE</button>';
    holdButton.innerHTML =
      ' <button type="button" class="btn btn-light" id="hold" disabled > <img class="Icons" src="./icons/box-arrow-in-down.svg" />HOLD </button>';
    newGameButton.innerHTML =
      '<button type="button" class="btn btn-light" id="newGame" ><img class="Icons" src="./icons/plus-circle.svg" />NEW GAME</button>';
    localScore = 1;
  }
}

rollDiceButton.addEventListener("click", addScore);
holdButton.addEventListener("click", addToGeneralScore);
newGameButton.addEventListener("click", newGame);
