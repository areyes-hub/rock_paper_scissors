let gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let cpuScore = 0;

function keepScore(p1, p2) {
    console.log(`Your score: ${p1}\nCPU score: ${p2}`);
}

function getComputerChoice() {
    let getCPUChoice = gameChoices[Math.floor(Math.random() * 3)];
    return getCPUChoice;
}

function getHumanChoice() {
    let getChoice = prompt("To play, please enter ('rock', 'paper' or 'scissors'): ").toLowerCase(); // Checks for case sensitivity.
    return getChoice;
}

function playRound(humanChoice, computerChoice) {

    console.log(`You chose: ${humanChoice}\nCPU chose: ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`${computerChoice} wins!`);
        cpuScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`${humanChoice} wins!`);
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`${computerChoice} wins!`);
        cpuScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`${humanChoice} wins!`);
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`${computerChoice} wins!`);
        cpuScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`${humanChoice} wins!`);
        humanScore += 1;
    }
    else {
        console.log(`No winner!`);
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();

    playRound(humanSelection, compSelection);
    keepScore(humanScore, cpuScore);

    let user = prompt("Do you want to play again? ").toLowerCase();
    if (user === "yes") {
        playGame();
    }
    else if (user === "no") {
        return 0;
    }
    else {
        console.log("Input not recognized...");
        return 0;
    }
}

playGame();


