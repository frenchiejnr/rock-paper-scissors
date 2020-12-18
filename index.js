let score = [0,0];
let playerScore = score[0];
let computerScore = score[1];
let choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let choice = Math.floor(Math.random() * choices.length);
  let play = choices[choice];
  return play;
}

function playerPlay() {
  let buttons = document.querySelectorAll('.choice');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      playRound(e.target.innerText ,computerPlay());
    }
    )
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
  // create variable named result
  let result;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection, computerSelection);
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
  return result;
}

function game() {
  playerPlay();
  if (playerScore === 5) {
    console.log("You Won!", playerScore, computerScore);
  } else {
    console.log("You Lost!", playerScore, computerScore);
  }
}

game();