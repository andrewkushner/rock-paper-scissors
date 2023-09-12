// Readline is required to read user input.
// Attempted to use prompt but unable to test successfully.
// Seems to be related to an outdated library and testing on a mac.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

 
function getComputerChoice (){
        var moveOptions = ['rock', 'paper', 'scissors'],
        // Using math.rand generates a random number between 0 and 1.
        // Using Math.floor and multiplier, we can set the min/max value for math.rand
        randNum = Math.floor(Math.random() * moveOptions.length),

        // Using the generated random number to select a choice
        compMove = moveOptions[randNum];
    return compMove;
}

function playRound(playerSelection, computerSelection){
    // .toLowerCase allows user to input any variation of input - ex. rock rOck rocK roCK .. etc
    playerSelection = playerSelection.toLowerCase();
    // switch takes the player input and provides cases to compare against and determine win, draw, loss
    switch (playerSelection){
        case 'rock':
            if(computerSelection === 'rock') {
            return 'Draw.';
            }
            else if (computerSelection === 'paper') {
                return 'You lose.';
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

// function game(){
//     var computerSelection = getComputerChoice();
//         for (let i = 0; i < 5; i++) {
//             // Readline question asks a question, storing user input within the variable, then use that variable in a function.
//             readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
//                 console.log(playRound(playerSelection, computerSelection));
//                 readline.close();
//             });  
//         }
// }

function game(){
    let i = 0;
    do{
        i += 1;
        var computerSelection = getComputerChoice();
        // Readline question asks a question, storing user input within the variable, then use that variable in a function.
        readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
            console.log(playRound(playerSelection, computerSelection));
            readline.close();
        });  
    } while (i < 5);
}

game();

// // Readline question asks a question, storing user input within the variable, then use that variable in a function.
// readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
//     console.log(playRound(playerSelection, computerSelection));
//     readline.close();
//   });