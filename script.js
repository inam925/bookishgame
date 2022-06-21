console.log('Hello World');
function computerPlay(){
    function random_item(computerSelection)
    {
      
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
         
    }
    
    var computerSelection = ["Rock", "Scissors", "Paper"];
    console.log(random_item(computerSelection));
}
let playerSelection = prompt("What do you choose?").toUpperCase();
let playerPoints = 0;
let computerPoints = 0;
function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock"){
        return alert("you win as rock");
    } else if( playerSelection == "Scissors" ){
        console.log("you win as scissors");
    } else if ( playerSelection == "Paper" ){
        console.log(" you lose as Paper");
    }

}

// const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}