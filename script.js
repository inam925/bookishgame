const arr = ['ROCK','PAPER','SCISSORS'];
function computerPlay(){
    const random = arr[Math.floor(Math.random()*arr.length)];
    return random;
}
const computerSelection = computerPlay();
console.log(computerSelection);

const playerSelection = prompt("What do you choose?").toUpperCase();
let playerPoints = 0;
let computerPoints = 0;
console.log(playerSelection);
function playRound(playerSelection, computerSelection){
    if (playerSelection === "ROCK" && computerSelection === 'SCISSORS'){
        console.log("you win as Rock");
        return playerPoints += 1;
    } else if( playerSelection === "ROCK" && computerSelection === 'PAPER'){
        console.log("you lose as Rock");
        return computerPoints += 1;
    } else if( playerSelection === "ROCK" && computerSelection === 'ROCK'){
        console.log("game is Tie");
    } else if ( playerSelection === "PAPER" && computerSelection === 'ROCK'){
        console.log(" you win as Paper");
        return playerPoints += 1;
    } else if ( playerSelection === "PAPER" && computerSelection === 'SCISSORS'){
        console.log(" you lose as Paper");
        return computerPoints += 1;
    } else if( playerSelection === "PAPER" && computerSelection === 'PAPER'){
        console.log("game is Tie");
    } else if ( playerSelection === "SCISSORS" && computerSelection === 'ROCK'){
        console.log(" you lose as Scissors");
        return computerPoints += 1;
    } else if ( playerSelection === "SCISSORS" && computerSelection === 'PAPER'){
        console.log(" you win as Scissors");
        return playerPoints += 1;
    } else if( playerSelection === "SCISSORS" && computerSelection === 'SCISSORS'){
        console.log("game is Tie");
    } 
}
// playRound(playerSelection, computerSelection);
function game(){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
}
game();

console.log(playerPoints);
console.log(computerPoints);