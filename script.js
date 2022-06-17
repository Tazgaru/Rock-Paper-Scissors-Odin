const choiceBtns = document.querySelectorAll('.footer button');
const roundWinnerDisplay = document.querySelector('.round-winner');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const playerChoiceImg= document.querySelector('.img1 img');
const computerChoiceImg = document.querySelector('.img3 img');


let playerScore = 0;
let computerScore = 0;


// when a button is clicked, call main game function
choiceBtns.forEach(btn => btn.addEventListener('click', game));


// function to get computer choice.
function computerPlay(){

    let computerSelection;
    let number = Math.floor(Math.random()*3);

    if (number == 0) {
        computerSelection = "rock"
    }
    else if (number == 1) {
        computerSelection = "paper"
    }
    else {
        computerSelection = "scissors"
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
    playerChoiceImg.src = `./images/${playerSelection}.png`
    computerChoiceImg.src = `./images/${computerSelection}.png`

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            roundResult = "Computer";
        }
        else if (computerSelection == "scissors"){
            roundResult = "Player";
        }
        else {
            roundResult = "Tie";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            roundResult = "Player";
        }
        else if (computerSelection == "scissors"){
            roundResult = "Computer";
        }
        else {
            roundResult = "Tie";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            roundResult = "Computer";
        }
        else if (computerSelection == "Paper"){
            roundResult = "Player";
        }
        else {
            roundResult = "Tie";
        }
    }

    return roundResult;
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
        setTimeout(() => {
            alert("You Win!"), 10;
            window.location.reload();
        })
        
    }
    else if (computerScore == 5){
        setTimeout(() => {
            alert("You Lose!"), 10;
            window.location.reload();
        })
    }
}
