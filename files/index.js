let computerScore = 0;
let playerScore = 0;
let display = document.querySelector(".display");

function computerPlay() {
  let choiceArray = ["rock", "paper", "scissors"];
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
  let myArray = [...playerSelection];
  console.log(myArray);

  if (compareObj[playerSelection] == computerSelection) {
    // checks if key's value is equal to computerSelection.
    computerScore++; //adds 1 to computerScore
    display.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    //displays You Lose! computerSelection beats playerSelection
  } else if (compareObj[computerSelection] == playerSelection) {
    //checks if key's value is equal to playerSelection
    playerScore++; //adds 1 to player score
    display.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`); //displays You Win! playerSelection beats computerSelection
  } else {
    display.textContent = "Tie!";
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log(this.textContent);
    playRound(this.textContent.replace(/\n|\s/g, ""), computerPlay());
  });
});

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(`Round ${i + 1}, Fight!`);
//     playRound();
//     console.log(`Player: ${playerScore} Computer: ${computerScore}`);
//   }
// if (computerScore < playerScore) {
//     console.log("Winner winner chicken dinner!")
//   }
//   else if (computerScore > playerScore) {
//     console.log("Loser loser chicken...loser.")
//   }
//   else {
//     console.log("Tie game!")
//   }
// }

// game();
