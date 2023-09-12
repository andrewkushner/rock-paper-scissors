const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getComputerChoice (){
        var moveOptions = ['rock', 'paper', 'scissors'],
        randNum = Math.floor(Math.random() * moveOptions.length),
        compMove = moveOptions[randNum];
    return compMove;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection){
        case 'rock':
            if(computerSelection === 'rock') {
            return 'draw';
            }
            else if (computerSelection === 'paper') {
                return 'You Lose.';
            }
            else {
                return 'You win.';
            }
            break;
        
        case 'paper':
            if(computerSelection === 'rock') {
            return 'You win';
            }
            else if (computerSelection === 'paper') {
                return 'Draw.';
            }
            else {
                return 'You lose.';
            }
            break;

        case 'scissors':
            if(computerSelection === 'rock') {
            return 'You lose.';
            }
            else if (computerSelection === 'paper') {
                return 'You win.';
            }
            else {
                return 'Draw.';
            }
            break;
    }
}

// const playerSelection = readline.question();
var computerSelection = getComputerChoice();
// var playerSelection = '';

// console.log(playRound(playerSelection, computerSelection));

readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
    console.log(playRound(playerSelection, computerSelection));
    readline.close();
  });