const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");
const winnerDisplay = document.getElementById("winner");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  // Randomly return rock, paper, or scissors
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  console.log(`You played: ${playerSelection}`);
  const computerSelection = computerPlay();
  console.log(`PC played: ${computerSelection}`);
  let result;

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    result = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  resultDisplay.textContent = result;
  if (playerScore === 5) {
    winnerDisplay.textContent = "Congratulations, you're the winner!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "Sorry, the computer wins!";
    disableButtons();
  }
}
function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
function logButton(buttonId) {
  console.log(`Button ${buttonId} pressed!`);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    logButton(button.textContent);
    playRound(button.textContent);
  });
});

// for (let i = 0; i < 5; i++) {
//   const playerSelection = prompt("Please choose: rock, paper or scissors");
//   const computerSelection = getComputerChoice();
//   console.log(`Round ${i + 1}`);
//   console.log(`You chose: ${playerSelection}`);
//   console.log(`PC chose: ${computerSelection}`);
//   console.log(playRound(playerSelection, computerSelection));
// }
