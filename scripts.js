let gameChoices = ["rock", "paper", "scissors"];
let randItem = gameChoices[Math.floor(Math.random() * 3)];
let input = prompt("Please enter ('rock', 'paper' or 'scissors'): ").toLowerCase(); // Checks for case sensitivity.
console.log(`You chose: ${input}\nCPU chose: ${randItem}`)

if (input === "rock" && randItem === "paper") {
    console.log(`${randItem} wins!`);
}
else if (input === "rock" && randItem === "scissors") {
    console.log(`${input} wins!`);
}
else if (input === "paper" && randItem === "scissors") {
    console.log(`${randItem} wins!`);
}
else if (input === "paper" && randItem === "rock") {
    console.log(`${input} wins!`);
}
else if (input === "scissors" && randItem === "rock") {
    console.log(`${randItem} wins!`);
}
else if (input === "scissors" && randItem === "paper") {
    console.log(`${input} wins!`);
}
else {
    console.log(`No winner!`);
}