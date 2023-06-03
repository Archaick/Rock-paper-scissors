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
let tie = 0;

function playRound(playerSelection) {
    console.log(`You chose ${playerSelection}`);

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    const computerChoice = getComputerChoice();

    /* Computer selection animation */
    
    // Highlighting computer's choice
    const computerContainer = document.getElementById('computer-container');
    const computerImg = computerContainer.querySelector('img');
    computerImg.src = `img/${computerChoice}.png`;
    // Add animation class to the container
    computerContainer.classList.add('appearance');

    // Force reflow by accessing the computed style
    computerContainer.offsetWidth;

    // Remove animation class to reset the animation
    computerContainer.classList.remove('appearance');

    // Add animation class again after a short delay
    setTimeout(() => {
    computerContainer.classList.add('appearance');
    }, 10);

    computerImg.classList.add('highlight-animation');
    setTimeout(() => {
        computerImg.classList.remove('highlight-animation');
    }, 1000);
    
    // Logic and score begins here
    if (playerSelection === computerChoice) {
        console.log("It's a tie! Try again!");
        tie++;
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

    if (playerScore === 3) {
        alert(`You've won!`);
        location.reload();
    }
    if (computerScore === 3) {
        alert("You've lost!");
        location.reload();
    }
    if (tie === 3) {
        alert("It's a tie! Try again!");
        location.reload();
    }
    
    updateResult(); // Call updateResult after updating the score
}


// Displaying results
const container = document.getElementById('wrapper');
const result = document.createElement('p');
container.appendChild(result);

function updateResult() {
    result.textContent = `Player: ${playerScore} Computer: ${computerScore} Tie: ${tie}`;
    result.classList.add('pulse'); // Add pulse class
}

// Call updateResult initially to display the initial score
updateResult();
