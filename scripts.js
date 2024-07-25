let gameChoices = ["rock", "paper", "scissors"];
let getComputerChoice = gameChoices[Math.floor(Math.random() * 3)];
let getHumanChoice = prompt("Please enter ('rock', 'paper' or 'scissors'): ").toLowerCase(); // Checks for case sensitivity.
console.log(`You chose: ${getHumanChoice}\nCPU chose: ${getComputerChoice}`)

if (getHumanChoice === "rock" && getComputerChoice === "paper") {
    console.log(`${getComputerChoice} wins!`);
}
else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
    console.log(`${getHumanChoice} wins!`);
}
else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
    console.log(`${getComputerChoice} wins!`);
}
else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
    console.log(`${getHumanChoice} wins!`);
}
else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
    console.log(`${getComputerChoice} wins!`);
}
else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
    console.log(`${getHumanChoice} wins!`);
}
else {
    console.log(`No winner!`);
}