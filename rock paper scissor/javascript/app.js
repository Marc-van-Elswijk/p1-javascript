const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
var kleur = document.getElementById("rps");
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
        computer = "cards";
        computerChoice.innerHTML = computer;
    }

    if (randomNumber == 2) {
       computer = "gamemaster marc";
       computerChoice.innerHTML = computer;
    }

    if (randomNumber == 3) {
       computer = "dices";
       computerChoice.innerHTML = computer;
    }
}


function getResult() {

    //winning

    if (computer == 'dices' && player == "cards") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
        kleur.style.backgroundColor = "lightgreen";
    }

    if (computer == 'gamemaster marc' && player == "dices") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
        kleur.style.backgroundColor = "lightgreen";
    }

    if (computer == 'cards' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'You have won! Good job Traveler';
        kleur.style.backgroundColor = "lightgreen";
    }

    //draw

    if (computer == 'dices' && player == "dices") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
        kleur.style.backgroundColor = "rgb(126, 53, 53)";
    }

    if (computer == 'gamemaster marc' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
        kleur.style.backgroundColor = "rgb(126, 53, 53)";
    }

    if (computer == 'cards' && player == "cards") {
        resultOutput.innerHTML = 'what are u doing Traveler?! A draw is not something for you, right?';
        kleur.style.backgroundColor = "rgb(126, 53, 53)";
    }

    //loses
    
    if (computer == 'dices' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
        kleur.style.backgroundColor = "red";
    }

    if (computer == 'gamemaster marc' && player == "cards") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
        kleur.style.backgroundColor = "red";
    }

    if (computer == 'cards' && player == "dices") {
        resultOutput.innerHTML = 'oof. You have lost this time Traveler. Maybe u need more luck for this';
        kleur.style.backgroundColor = "red";
    }
}