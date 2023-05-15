// From Odin Project

function getComputerChoice() {
    computerChoice =  Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("Rock");
    } else if (computerChoice === 1) {
        console.log("Paper");
    } else if (computerChoice === 2) {
        console.log("Scissors");
    } else {
        console.log("Insert a valid input");
    }
}

getComputerChoice()