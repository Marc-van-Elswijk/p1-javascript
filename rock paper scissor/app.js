const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
var player 
var computer 
var result 

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
        resultOutput.innerHTML = 'je hebt gewonnen, dappere krijger!';
    }

    if (computer == 'gamemaster marc' && player == "dices of light") {
        resultOutput.innerHTML = 'je hebt gewonnen, dappere krijger!';
    }

    if (computer == 'dices of evil' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'je hebt gewonnen, dappere krijger!';
    }

    //gelijkspel

    if (computer == 'dices of light' && player == "dices of light") {
        resultOutput.innerHTML = 'wat doe je dappere krijger?!  Een gelijkspel is toch niks voor jou!';
    }

    if (computer == 'gamemaster marc' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'wat doe je dappere krijger?!  Een gelijkspel is toch niks voor jou!';
    }

    if (computer == 'dices of evil' && player == "dices of evil") {
        resultOutput.innerHTML = 'wat doe je dappere krijger?!  Een gelijkspel is toch niks voor jou!';
    }

    //Verloren
    
    if (computer == 'dices of light' && player == "gamemaster marc") {
        resultOutput.innerHTML = 'Helaas dappere krijger. deze keer heb je minder geluk';
    }

    if (computer == 'gamemaster marc' && player == "dices of evil") {
        resultOutput.innerHTML = 'Helaas dappere krijger. deze keer heb je minder geluk';
    }

    if (computer == 'dices of evil' && player == "dices of light") {
        resultOutput.innerHTML = 'Helaas dappere krijger. deze keer heb je minder geluk';
    }

}