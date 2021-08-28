let wins = 0;
let loses = 0;
let h_score = document.querySelector("#h-score");
let c_score = document.querySelector("#c-score"); 
let result = document.querySelector("#result");
let h_choice = document.querySelector("#h-choice");
let c_choice = document.querySelector("#c-choice");
const buttons = document.querySelectorAll(".btn");
const round = document.querySelector("#round")
let n_round = 1;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.id;
        playerSelection(choice);
        computerPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection(choice),computerSelection);
    } )
})

function playerSelection(choice) {  
    return choice;
}

function computerPlay() {
    choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}



function playRound(playerSelection, computerSelection) {
    if (gameOver()) {
        h_choice.innerHTML = playerSelection;
        c_choice.innerHTML = computerSelection;
        round.innerHTML = n_round;
        if (playerSelection === "Rock" && computerSelection === "Rock"){
            result.innerHTML = 'Tie Game!!';

    }   else if(playerSelection === "Rock" && computerSelection === "Paper") {
            loses = loses + 1;
            result.innerHTML = "You lost!! Paper beats Rock";
    }else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            wins = wins + 1;
            result.innerHTML = "You won!! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            wins = wins + 1;
            result.innerHTML = "You won!! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            result.innerHTML = 'Tie Game!!';
    }else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            loses = loses + 1;
            result.innerHTML = "You lost!! Scissors beats Paper";
    }else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            loses = loses + 1;
        result.innerHTML = "You lost!! Rock beats Scissors";
    }else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            wins = wins + 1;
            result.innerHTML = "You won!! Scissors beats Paper";
    }else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            result.innerHTML = 'Tie Game!!';
    }
    h_score.innerHTML = wins;
    c_score.innerHTML = loses;
    if (wins === 5) {
        result.innerHTML = "Congrats!! Humans won!! press f5 to replay";
    }else if (loses === 5) {
        result.innerHTML = "Bad luck!! Computers won!! prees f5 to replay";
    }
    n_round++;
    } else {
        return;
    }
} 

function gameOver() {
    if (wins === 5 || loses === 5) {
        return false;
    }else {
        return true;
    }
}
