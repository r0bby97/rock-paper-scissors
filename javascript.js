function getComputerChoice() {
  const rockPaperScissorsArray = ["rock", "paper", "scissors"];
  const computerChoice = rockPaperScissorsArray[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper and scissors.").toLowerCase();
  if (
    humanChoice !== null &&
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Please choose only between rock, paper and scissors.");
    return getHumanChoice();
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "scissors") {
      humanScore++;
      console.log("You won! Rock beats Scissors.");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      console.log("You won! Paper beats Rock.");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      humanScore++;
      console.log("You won! Scissors beats Paper.");
    } else if (humanSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock.");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper.");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors.");
    } else if (humanSelection === "rock" && computerSelection === "rock") {
      console.log("Tie! Rock against Rock.");
    } else if (humanSelection === "paper" && computerSelection === "paper") {
      console.log("Tie! Paper against Paper.");
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
      console.log("Tie! Scissors against Scissors.");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Your Score: " + humanScore + "; Computer Score: " + computerScore);
  }

  if (humanScore > computerScore) {
    console.log("YOU ARE THE WINNER!");
  } else if (humanScore < computerScore) {
    console.log("YOU ARE THE LOSER!");
  } else {
    console.log("TIE, NO ONE WINS!");
  }
}

playGame();
