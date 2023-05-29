// From Odin Project

// added const declaration, function can print result
let computerChoice =  Math.floor(Math.random() * 3);


function getComputerChoice() {
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    } 
}

// Using this variable to validate next function
console.log("#########################");
console.log(`Computer chose... ${getComputerChoice()}`);
console.log("#########################");

function playRound() {
    // playerSelection = prompt("Choose rock paper scissors").toLowerCase();
    let player = playerSelection.toString();

    if (player === getComputerChoice()) {
        return "Ace! Try again!";
    } 
    // player === rock
    else if (player === "rock" && getComputerChoice() === "paper") {
        return `Paper beats rocks! You lost!`;
    } else if (player === "rock" && getComputerChoice() === "scissors") {
        return `Rocks beat scissors! You won!`;
    }
    // player === paper
    else if (player === "paper" && getComputerChoice() === "rock") {
        return "Paper beats rock! You Won!";
    } else if (player === "paper" && getComputerChoice() === "scissors") {
        return "You lost! scissors beat papers!";
    }

    // player === scissors
    else if (player === "scissors" && getComputerChoice() === "rock") {
        return "You lost! rock beats scissors!";
    } else if (player === "scissors" && getComputerChoice() === "paper") {
        return "You won! scissors beat papers"
    }

    else {
        return 'Invalid value; input rock, paper or scissors';
    }
}

console.log(playRound());