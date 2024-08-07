let you = document.querySelector(".you");
you.textContent = "YOU: ";
let cpu = document.querySelector(".cpu");
cpu.textContent = "CPU: ";

let yourPick = document.querySelector(".human-choice");
let cpuPick = document.querySelector(".cpu-choice");

let final = document.querySelector(".final");

function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let getCPUChoice = gameChoices[Math.floor(Math.random() * 3)];
    cpuPick.textContent = getCPUChoice;
}

function playGame() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let winner = document.querySelector(".outcome");
    let hScore = document.querySelector(".human-score");
    let cScore = document.querySelector(".cpu-score")
    let userPoints = 0;
    let cpuPoints = 0;

    let rockBtn = document.querySelector(".rock");
    rockBtn.addEventListener("click", () => {
        getWinner(userPoints, cpuPoints);
        getComputerChoice();
        yourPick.textContent = gameChoices[0];
        if (cpuPick.textContent === "Paper") {
            cpuPoints += 1;
            winner.textContent = `Paper wins!`;
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else if (cpuPick.textContent === "Scissors") {
            userPoints += 1;
            winner.textContent = `Rock wins!`;
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else {
            winner.textContent = `Tied Game!`;
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
    })
    let paperBtn = document.querySelector(".paper");
    paperBtn.addEventListener("click", () => {
        getWinner(userPoints, cpuPoints);
        getComputerChoice();
        yourPick.textContent = gameChoices[1];
        if (cpuPick.textContent === "Scissors") {
            cpuPoints += 1;
            winner.textContent = "Scissors wins!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else if (cpuPick.textContent === "Rock") {
            userPoints += 1;
            winner.textContent = "Paper wins!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else {
            winner.textContent = "Tied game!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
    })
    let scissorsBtn = document.querySelector(".scissors");
    scissorsBtn.addEventListener("click", () => {
        getWinner(userPoints, cpuPoints);
        getComputerChoice();
        yourPick.textContent = gameChoices[2];
        if (cpuPick.textContent === "Paper") {
            userPoints += 1;
            winner.textContent = "Scissors wins!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else if (cpuPick.textContent === "Rock") {
            cpuPoints += 1;
            winner.textContent = "Rock wins!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
        else {
            winner.textContent = "Tied game!";
            hScore.textContent = `Your score: ${userPoints}`
            cScore.textContent = `CPU score: ${cpuPoints}`
        }
    })
}

function getWinner(uP, cP) {
    if (uP === 5) {
        final.textContent = "You Won the game!";
        yourPick.textContent = "";
        cpuPick.textContent = "";
        winner.textContent = "";
        hScore.textContent = "";
        cScore.textContent = "";
    }
    else if (cP === 5) {
        final.textContent = "CPU Won the game!";
        yourPick.textContent = "";
        cpuPick.textContent = "";
        winner.textContent = "";
        hScore.textContent = "";
        cScore.textContent = "";
    }
};

playGame();




