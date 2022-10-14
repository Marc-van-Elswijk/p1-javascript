const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
var player 
var computer 
var result 

function start_spel() {
    window.location.href = "../pagina/rock paper and scissors.html";
}

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber == 1) {
        computer = "dices of evil";
        computerChoice.innerHTML = computer;
    }

    if (randomNumber == 2) {
       computer = "gamemaster marc";
       computerChoice.innerHTML = computer;
    }

    if (randomNumber == 3) {
       computer = "dices of light";
       computerChoice.innerHTML = computer;
    }
}


function getResult() {

    //gewonnen

    if (computer == 'dices of light' && player == "dices of evil") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
    }

    if (computer == 'gamemaster marc' && player == "dices of light") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
    }

    if (computer == 'dices of evil' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
    }

    //gelijkspel

    if (computer == 'dices of light' && player == "dices of light") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
    }

    if (computer == 'gamemaster marc' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
    }

    if (computer == 'dices of evil' && player == "dices of evil") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
    }

    //Verloren
    
    if (computer == 'dices of light' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
    }

    if (computer == 'gamemaster marc' && player == "dices of evil") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
    }

    if (computer == 'dices of evil' && player == "dices of light") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
    }
}