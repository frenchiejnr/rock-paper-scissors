function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * choices.length);
  let play = choices[choice];
  return play;
}

function informWin(playerSelection, computerSelection) {
  return (result = `You win! ${capitalize(playerSelection)} beats ${capitalize(
    computerSelection
  )}`);
}
function informLoss(playerSelection, computerSelection) {
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
  // If playerSelection = computerSelection -> tie
  if (playerSelection === computerSelection) {
    result = `It's a tie! ${capitalize(playerSelection)} equals ${capitalize(
      computerSelection
    )}`;
  }
  // return result
  return result;
}