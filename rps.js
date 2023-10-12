// Readline is required to read user input.
// Attempted to use prompt but unable to test successfully.
// Seems to be related to an outdated library and testing on a mac.
// Browser
const readline = import("file/lib").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Node
// const readline = require("readline/promises").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// Set variables for score tracking for function finalScore()
let userScore = 0;
let compScore = 0;
let drawScore = 0;

// Used to select computer choice at random, and validate user input
const moveOptions = ['rock', 'paper', 'scissors'];

// Function to randomize computer's selection.
function getComputerChoice (){
        // Using math.rand generates a random number between 0 and 1.
        // Using Math.floor and multiplier, we can set the min/max value for math.rand
        let randNum = Math.floor(Math.random() * moveOptions.length),

        // Using the generated random number to select a choice
        compMove = moveOptions[randNum];
    return compMove;
}

// Function to play round and determine result.
function playRound(playerSelection, computerSelection){
    // .toLowerCase allows user to input any variation of input - ex. rock rOck rocK roCK .. etc
    playerSelection = playerSelection.toLowerCase();
    // switch takes the player input and provides cases to compare against and determine win, draw, loss
    switch (playerSelection){
        case 'rock':
            if(computerSelection === 'rock') {
                drawScore += 1;
                return 'Draw.';
            }
            else if (computerSelection === 'paper') {
                compScore += 1;
                return 'You lose.';
            }
            else {
                userScore += 1;
                return 'You win.';
            }
            break;
        
        case 'paper':
            if(computerSelection === 'rock') {
                userScore += 1;
                return 'You win';
            }
            else if (computerSelection === 'paper') {
                drawScore += 1;
                return 'Draw.';
            }
            else {
                compScore += 1;
                return 'You lose.';
            }
            break;

        case 'scissors':
            if(computerSelection === 'rock') {
                compScore += 1;
                return 'You lose.';
            }
            else if (computerSelection === 'paper') {
                userScore += 1;
                return 'You win.';
            }
            else {
                drawScore += 1;
                return 'Draw.';
            }
            break;
    }
}

// Final score compares user and computer score as the game progresses to determine win, loss or tie.
function finalScore(userScore, compScore){
    if (userScore > compScore){
        return console.log("You win! Your score: " + userScore + ". Computer Score: " + compScore + ". Tie games: " + drawScore);
    }
    else if (userScore < compScore){
        return console.log("You lost. Your score: " + userScore + ". Computer Score: " + compScore + ". Tie games: " + drawScore);
    }
    else {
        return console.log("It's a tie.");
    }
}


// Function game plays the game, calling other functions and outputting the results.
async function game() {
    for (let i = 0; i < 100; i++) {
        if (userScore == 5 || compScore == 5){
            i = 101;
        }
        else{
            let computerSelection = getComputerChoice();
            let playerSelection = await readline.question(`Rock, Paper or Scissors? `);
        
        // Using this if statement to take player input, set it to lower case (this enables the user to enter any variation or lower/upper case).
        // and then alidate if it is an expected selection.
          if (moveOptions.includes(playerSelection.toLowerCase())){
            console.log(playRound(playerSelection, computerSelection));
          }
          else{
            // If user enters invalid selection it prompts again for correct input.
            playerSelection = await readline.question(`\nPlease enter a valid selection: `);
          }
        } 
    }
    readline.close();
    finalScore(userScore,compScore);
}

game();

// // Readline question asks a question, storing user input within the variable, then use that variable in a function.
// readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
//     console.log(playRound(playerSelection, computerSelection));
//     readline.close();
//   });

// // Original code
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


// Attempting to fix the loop - corrected the var computerSelection order as it was stuck on one input rather than updating each play.
// function game(){
//         var computerSelection = getComputerChoice();
//         // Readline question asks a question, storing user input within the variable, then use that variable in a function.
//         readline.question('Rock, Paper or Scissors? ', (playerSelection) => {
//             console.log(playRound(playerSelection, computerSelection));
//             readline.close();
//         });  
// }

// var i = 0;
// while (i < 5){
//         game();
//         i++;
//         console.log(i);
// }