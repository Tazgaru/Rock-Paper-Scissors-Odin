const choiceBtns = document.querySelectorAll('.footer button');
const roundWinnerDisplay = document.querySelector('.round-winner');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');


let playerScore = 0;
let computerScore = 0;


// when a button is clicked, call main game function
choiceBtns.forEach(btn => btn.addEventListener('click', game));


// function to get computer choice.
function computerPlay(){

    let computerSelection;
    let number = Math.floor(Math.random()*3);

    if (number == 0) {
        computerSelection = "Rock"
    }
    else if (number == 1) {
        computerSelection = "Paper"
    }
    else {
        computerSelection = "Scissors"
    }

    return computerSelection;
}

// function to get user choice
function playerPlay(){

    let playerSelection = prompt("What's your choice?");

    playerSelection = playerSelection.toLowerCase()

    return playerSelection;
}

// function to play one round
// returns string with result
function playRound(playerSelection, computerSelection){

    let roundResult;

    if (playerSelection == "rock"){
        if (computerSelection == "Paper"){
            roundResult = "Computer";
        }
        else if (computerSelection == "Scissors"){
            roundResult = "Player";
        }
        else {
            roundResult = "Tie";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "Rock"){
            roundResult = "Player";
        }
        else if (computerSelection == "Scissors"){
            roundResult = "Computer";
        }
        else {
            roundResult = "Tie";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock"){
            roundResult = "Computer";
        }
        else if (computerSelection == "Paper"){
            roundResult = "Player";
        }
        else {
            roundResult = "Tie";
        }
    }
    else {
        alert("Invalid entry. Please type 'rock', 'paper' or 'scissors'.")
    }

    return roundResult;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundWinnerDisplay.textContent = '------';
}

// main game function
function game(){

    // play a round with button's class value as player choice
    let roundResult = playRound(this.classList.value, computerPlay());


    if (roundResult == "Player") {
        playerScore++;
        roundWinnerDisplay.textContent = "Player!";
        playerScoreDisplay.textContent = playerScore;
    }
    else if (roundResult == "Computer") {
        computerScore++;
        roundWinnerDisplay.textContent = "Computer!";
        computerScoreDisplay.textContent = computerScore;
    }
    else {
        roundWinnerDisplay.textContent = "It's a tie!";
    }
    

    if (playerScore == 5){
        alert("You Win!");
        resetGame();
    }
    else if (computerScore == 5){
        alert("You Lose!");
        resetGame();
    }
}
