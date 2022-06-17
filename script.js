const choiceBtns = document.querySelectorAll('.footer button');
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

// main game function
function game(){

    let playerScore = 0;
    let computerScore = 0;

    // play a round with button's class value as player choice
    let roundResult = playRound(this.classList.value, computerPlay());

    // add point to winner and display score
    if (roundResult == "Player") {
        playerScore++;
        alert(`Player gets a point.  P${playerScore} X C${computerScore}`)
    }
    else if (roundResult == "Computer") {
        computerScore++;
        alert(`Computer gets a point.  P${playerScore} X C${computerScore}`)
    }
    else {
        alert(`Tie.  P${playerScore} X C${computerScore}`)
    }
    

    if (playerScore > computerScore){
        alert("You Win!");
    }
    else if (computerScore > playerScore){
        alert("You lose!");
    }
    else {
        alert("It's a Tie!");
    }
}
