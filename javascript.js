let humanScore = 0;
let computerScore = 0;
const container = document.querySelector(".container");

function playGame() {
  let buttons = document.querySelectorAll(".rps-buttons");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const computerSelection = getComputerChoice();
      const humanSelection = event.target.textContent.toLowerCase();

      if (humanScore < 5 && computerScore < 5) {
        playRound(humanSelection, computerSelection);
      } else {
        humanScore = 0;
        computerScore = 0;

        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      }
    });
  });
}

function getComputerChoice() {
  const rockPaperScissorsArray = ["rock", "paper", "scissors"];
  const computerChoice = rockPaperScissorsArray[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(humanSelection, computerSelection) {
  const won = "You won!";
  const lose = "You lose!";
  const tie = "Tie!";
  const humSelUpper =
    humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1);
  const comSelUpper =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  const container = document.querySelector(".container");

  if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    const para = document.createElement("p");
    para.textContent = `${won} ${humSelUpper} beats ${comSelUpper}.`;
    container.appendChild(para);
  } else if (
    (humanSelection === "rock" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    const para = document.createElement("p");
    para.textContent = `${lose} ${humSelUpper} looses against ${comSelUpper}.`;
    container.appendChild(para);
  } else {
    const para = document.createElement("p");
    para.textContent = `${tie} ${humSelUpper} against ${comSelUpper}.`;
    container.appendChild(para);
  }

  if (humanScore === 5 || computerScore === 5) {
    displayScore();
  }
}

function displayScore() {
  const h2 = document.createElement("h2");
  const para = document.createElement("p");

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  if (humanScore > computerScore) {
    h2.textContent = "YOU ARE THE WINNER!";
  } else if (humanScore < computerScore) {
    h2.textContent = "YOU ARE THE LOSER!";
  } else if (humanScore === computerScore) {
    h2.textContent = "TIE, NO ONE WINS!";
  }
  h2.setAttribute(
    "style",
    "width: 300px; padding: 1em 2em; color: #282828; background: yellow; text-align: center",
  );
  container.appendChild(h2);

  para.textContent = `Your Score: ${humanScore}; Computer Score: ${computerScore}`;
  para.setAttribute(
    "style",
    "width: 300px; padding: 1em 2em; border: solid 1px #282828; color: #282828; text-align: center",
  );
  container.appendChild(para);
}

playGame();
