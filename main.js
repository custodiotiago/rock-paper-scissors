let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Escolha Rock, Paper ou Scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Entrada inválida. Escolha Rock, Paper ou Scissors:").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`Você escolheu: ${humanChoice}`);
  console.log(`Computador escolheu: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Empate!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Você ganhou esta rodada!");
    humanScore++;
  } else {
    console.log("Você perdeu esta rodada!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRodada ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Placar: Você ${humanScore} - ${computerScore} Computador`);
  }

  if (humanScore > computerScore) {
    console.log("\nParabéns! Você venceu o jogo!");
  } else if (computerScore > humanScore) {
    console.log("\nQue pena! O computador venceu o jogo.");
  } else {
    console.log("\nO jogo terminou empatado!");
  }
}

playGame();