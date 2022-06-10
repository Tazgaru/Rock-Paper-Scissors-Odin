// function to get computer choice.
function computerPlay(){
    let computerSelection;
    let number = Math.floor(Math.random()*3);
    if (number == 0) computerSelection = "Rock"
    else if (number == 1) computerSelection = "Paper"
    else computerSelection = "Scissors"

    return computerSelection;
}

// function to get user choice
// function to play one round
// for loop to 5 rounds
//     get computer choice
//     get user choice
//     play round
//     add point to winner 
//     if wins == 3 break out of for loop.