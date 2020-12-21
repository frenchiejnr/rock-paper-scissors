let score = [0, 0];
let playerScore = score[0];
let computerScore = score[1];
let choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let choice = Math.floor(Math.random() * choices.length);
  let play = choices[choice];
  return play;
}

function playerPlay() {
  let buttons = document.querySelectorAll(".choice");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      playRound(e.target.innerText, computerPlay());
    });
  });
}

function informWin(playerSelection, computerSelection) {
  playerScore += 1;
  return (result = `You win! ${capitalize(playerSelection)} beats ${capitalize(
    computerSelection
  )}`);
}
function informLoss(playerSelection, computerSelection) {
  computerScore += 1;
  return (result = `You lose! ${capitalize(
    computerSelection
  )} beats ${capitalize(playerSelection)}`);
}

function capitalize(string) {
  return (string = string.charAt(0).toUpperCase() + string.slice(1));
}

function playRound(playerSelection, computerSelection) {
  let result;
  let playerSelectionInput = document.querySelector("#playerSelection");
  let computerSelectionInput = document.querySelector("#computerSelection");
  let resultInput = document.querySelector("#result");
  let playerScoreText = document.querySelector("#playerScore");
  let computerScoreText = document.querySelector("#computerScore");

  playerSelectionInput.value = playerSelection;
  computerSelectionInput.value = computerSelection;

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = informWin(playerSelection, computerSelection);
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = informLoss(playerSelection, computerSelection);
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = informWin(playerSelection, computerSelection);
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = informLoss(playerSelection, computerSelection);
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = informWin(playerSelection, computerSelection);
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = informLoss(playerSelection, computerSelection);
  }
  if (playerSelection === computerSelection) {
    result = `It's a tie! ${capitalize(playerSelection)} equals ${capitalize(
      computerSelection
    )}`;
  }

  resultInput.value = result;
  playerScoreText.value = playerScore;
  computerScoreText.value = computerScore;
  let gameFinished = checkWinner();

  if (gameFinished) {
    disableButtons();
  }
  return result;
}

function disableButtons() {
  let buttons = document.querySelectorAll(".choice");

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function checkWinner() {
  let gameFinished = false;
  if (playerScore === 5) {
    gameFinished = true;
    alert(`You Won! ${playerScore} - ${computerScore}`);
  } else if (computerScore === 5) {
    gameFinished = true;
    alert(`You Lost! ${playerScore} - ${computerScore}`);
  }
  return gameFinished;
}

function game() {
  playerPlay();
}

game();
