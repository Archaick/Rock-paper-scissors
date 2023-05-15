// From Odin Project

function getComputerChoice() {
    // added const declaration, function can print result
    const computerChoice =  Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    } else {
        return "Insert a valid input";
    }
}



function playRound(playerSelection, computerSelection) {

}