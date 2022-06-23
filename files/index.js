let choiceArray = ["rock", "paper", "scissors"];
function computerPlay() {
  return choiceArray[~~(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection) {
  const compareObj = {
    // Object {Key is what you're checking : value is the thing that beats it}
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };
  computerSelection = computerPlay(); //assings variable to return value of computerPlay()
  playerSelection = playerSelection.toLowerCase();
  if (compareObj[playerSelection] == computerSelection) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (compareObj[computerSelection] == playerSelection) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log("Tie!");
  }
}
playRound("rock");
