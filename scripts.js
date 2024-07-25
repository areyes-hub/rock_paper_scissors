let gameChoices = ["rock", "paper", "scissors"];
let randItem = gameChoices[Math.floor(Math.random() * 3)];
let input = prompt("Please enter ('rock', 'paper' or 'scissors'): ").toLowerCase(); // Checks for case sensitivity.


alert(input);