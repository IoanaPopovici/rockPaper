//selecting elements

const playerBtns = document.querySelector("#playerBtns");
const showComputer = document.querySelector("#computerScore");
const showPlayer = document.querySelector("#playerScore");
const scoreWon = document.querySelector("#scoreWon");
const scoreP = document.querySelector("#scoreP");
const scoreC = document.querySelector("#scoreC");
const resetBtn = document.querySelector("#resetBtn");

//creating the list
let game = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

playerBtns.addEventListener("click", (e) => {
  let computer = game[Math.floor(Math.random() * game.length)];
  //find the button that is pressed from the gamer.
  let player = e.target.closest("[data-action]");
  if (player === null) return;
  //showing
  let choosePlayer = player.innerText;
  showPlayer.innerText = choosePlayer;
  showComputer.innerText = computer;
  //comparing the results of  player vs results computer
  if (
    (computer === "rock") & (choosePlayer === "scissors") ||
    (computer === "scissors") & (choosePlayer === "paper") ||
    (computer === "paper") & (choosePlayer === "rock")
  ) {
    scoreWon.innerText = "Computer win!";
    computerScore++;
  } else if (computer === choosePlayer) {
    scoreWon.innerText = "Egalite";
    computerScore++;
    playerScore++;
  } else {
    scoreWon.innerText = "Player win!";
    playerScore++;
  }
  finish();
  scoreP.innerText = playerScore;
  scoreC.innerText = computerScore;
});
//Who will reach first 5 points will win.
function finish() {
  if (playerScore === 5) {
    alert(`Player - ${playerScore} win against the computer- ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore === 5) {
    alert(`Computer - ${computerScore} win against the Player- ${playerScore}`);
    computerScore = 0;
    playerScore = 0;
    return;
  } else if (playerScore === 5 && computerScore === 5) {
    alert("Both of you are good!");
  }
}
//Reset score.
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  scoreP.innerText = 0;
  scoreC.innerText = 0;
});
