// Referencing buttons find within wrapper div container
const button1 = document.getElementById('rock');
const button2 = document.getElementById('paper');
const button3 = document.getElementById('scissors');

// Adding event listener to the button on click
button1.addEventListener('click', function () {
    playRound('rock');
});

button2.addEventListener('click', function () {
    playRound('paper');
});

button3.addEventListener('click', function () {
    playRound('scissors');
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    console.log(`You choose ${playerSelection}`);

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    const computerChoice = getComputerChoice();

    console.log(`Computer chose... ${computerChoice}`);

    if (playerSelection === computerChoice) {
        console.log("Ace! Try again!");
    } else if (
        (playerSelection === "rock" && computerChoice === "paper") ||
        (playerSelection === "paper" && computerChoice === "scissors") ||
        (playerSelection === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${playerSelection}!`);
    } else {
        playerScore++;
        console.log(`You won! ${playerSelection} beats ${computerChoice}!`);
    }

    updateResult(); // Call updateResult after updating the score
}

// Displaying results
const container = document.getElementById('wrapper');
const result = document.createElement('p');
container.appendChild(result);

function updateResult() {
    result.textContent = `Score - Player: ${playerScore}  Computer: ${computerScore}`;
}

// Call updateResult initially to display the initial score
updateResult();
