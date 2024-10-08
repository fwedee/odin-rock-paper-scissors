// Function which return a random choice for rock, paper, scissors for the computer.
function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

// Function which asks the user for his choice in rock, paper, scissors and return it.
function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?");
  while (true) {
    switch (choice.toLowerCase()) {
      case "rock":
        return "Rock";
      case "paper":
        return "Paper";
      case "scissors":
        return "Scissors";
      default:
        choice = prompt(
          "Incorrect Input. Try it again. \n Rock, Paper or Scissors?"
        );
    }
  }
}

// Variables to keep track of the players and computers scores
var humanScore = 0;
var computerScore = 0;

// Function which evaluates which player won a round.
function playRound(getHumanChoice, getComputerChoice) {
  let lose = `You lose! ${getHumanChoice} gets beaten by ${getComputerChoice}.`;
  let tie = `Nobody won. ${getHumanChoice} ties with ${getComputerChoice}.`;
  let win = `You win! ${getHumanChoice} beats ${getComputerChoice}.`;

  getComputerChoice = getComputerChoice.toLowerCase();
  getHumanChoice = getHumanChoice.toLowerCase();

  switch (getHumanChoice) {
    case "rock":
      switch (getComputerChoice) {
        case "paper":
          ++computerScore;
          return lose;
        case "scissors":
          ++humanScore;
          return win;
        case "rock":
          return tie;
      }
    case "paper":
      switch (getComputerChoice) {
        case "scissors":
          ++computerScore;
          return lose;
        case "rock":
          ++humanScore;
          return win;
        case "paper":
          return tie;
      }
    case "scissors":
      switch (getComputerChoice) {
        case "rock":
          ++computerScore;
          return lose;
        case "paper":
          ++humanScore;
          return win;
        case "scissors":
          return tie;
      }
  }
}

function checkWinner() {
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      return "You are the winner!";
    } else if (humanScore < computerScore) {
      return "You are the loser!";
    } else {
      return "No body wins!";
    }
  } else {
    return "";
  }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");
const endResults = document.querySelector(".endResults");
const score = document.querySelector(".score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.innerText;
    const computerSelection = getComputerChoice();
    let play = playRound(humanSelection, computerSelection);
    score.textContent = `${humanScore} - ${computerScore}`;
    result.textContent = play;
    const checkWin = checkWinner();
    if (checkWin !== "") {
      endResults.textContent = checkWin;
    }
  });
});
