let playerScore;
let computerScore;
const rock = document.querySelector('.rock');
let player = document.querySelector('.playerScore', playerScore = 0);
let computer = document.querySelector('.computerScore', computerScore = 0);
let finalResult = document.querySelector('.finalResult');

rock.addEventListener('click', rockClick);

function rockClick(){
    const arr = ['ROCK','PAPER','SCISSORS'];
function computerPlay(){
    const random = arr[Math.floor(Math.random()*arr.length)];
    return random;
}
let computerSelection = computerPlay();
console.log(computerSelection);
    if (computerSelection === "ROCK") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  } else if (computerSelection === "PAPER") {
    computer.textContent = `Computer Score: ${(computerScore += 1)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  } else if (computerSelection === "SCISSORS") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 1)}`;
  }
  if (playerScore === 5) {
    finalResult.textContent = "You Won";
    // removing event listener:
    rock.removeEventListener("click", onClick);
    document.getElementById("one").classList.add('btn-disabled');
    rock.setAttribute("disabled", true);
  } else if (computerScore === 5) {
    finalResult.textContent = "You Lost";
    // Same here
    rock.removeEventListener("click", onClick);
    document.getElementById("one").classList.add('btn-disabled');
    rock.setAttribute("disabled", true);
  }
}

const paper = document.querySelector('.paper');
paper.addEventListener('click', paperClick);
function paperClick(){
    const arr = ['ROCK','PAPER','SCISSORS'];
function computerPlay(){
    const random = arr[Math.floor(Math.random()*arr.length)];
    return random;
}
let computerSelection = computerPlay();
console.log(computerSelection);

    if (computerSelection === "ROCK") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 1)}`;
  } else if (computerSelection === "PAPER") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  } else if (computerSelection === "SCISSORS") {
    computer.textContent = `Computer Score: ${(computerScore += 1)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  }
  if (playerScore === 5) {
    finalResult.textContent = "You Won";
    // removing event listener:
    paper.removeEventListener("click", onClick);
    document.getElementById("two").classList.add('btn-disabled');
    paper.setAttribute("disabled", true);
  } else if (computerScore === 5) {
    finalResult.textContent = "You Lost";
    // Same here
    paper.removeEventListener("click", onClick);
    document.getElementById("two").classList.add('btn-disabled');
    paper.setAttribute("disabled", true);
  }
}

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', scissorsClick);
function scissorsClick(){
const arr = ['ROCK','PAPER','SCISSORS'];
function computerPlay(){
    const random = arr[Math.floor(Math.random()*arr.length)];
    return random;
}
let computerSelection = computerPlay();
console.log(computerSelection);

    if (computerSelection === "ROCK") {
    computer.textContent = `Computer Score: ${(computerScore += 1)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  } else if (computerSelection === "PAPER") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 1)}`;
  } else if (computerSelection === "SCISSORS") {
    computer.textContent = `Computer Score: ${(computerScore += 0)}`;
    player.textContent = `Your Score: ${(playerScore += 0)}`;
  }
  if (playerScore === 5) {
    finalResult.textContent = "You Won";
    // removing event listener:
    scissors.removeEventListener("click", onClick);
    document.getElementById("three").classList.add('btn-disabled');
    scissors.setAttribute("disabled", true);
  } else if (computerScore === 5) {
    finalResult.textContent = "You Lost";
    // Same here
    scissors.removeEventListener("click", onClick);
    document.getElementById("three").classList.add('btn-disabled');
    scissors.setAttribute("disabled", true);
  }
}
