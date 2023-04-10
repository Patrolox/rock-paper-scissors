function getComputerChoice() {
  // random value for computer player
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// ask for user input

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection.toLowerCase()) {
    console.log("TIE!");
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  )
    return "You win!";
  else return "You loose";
}

for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("Please choose: rock, paper or scissors");
  const computerSelection = getComputerChoice();
  console.log(`Round ${i + 1}`);
  console.log(`You chose: ${playerSelection}`);
  console.log(`PC chose: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));
}
