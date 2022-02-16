//Referenced my HTML tags here to facilitate the code.
let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("player_score");
let cpuScore_span = document.getElementById("cpu_score");
let scoreBoard_div = document.querySelector(".score_board");
let results_p = document.querySelector(".results > p");
let results_h3 = document.querySelector(".results > h3");
let result_h4 = document.querySelector(".results > h4");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

// This function will be called when the page is loaded. 
// It will assign a list to the variablecup_choices
// It will then use Math.Math.random() to get a random number between 0 and 1
function get_cpu_choice() {
    let cpu_choices = ["Rock", "Paper", "Scissors"];
    let random_number = (Math.floor(Math.random() * 3));
    return cpu_choices[random_number];
}

//This function increases the score of the user by 1.
// It will also display the player's choice and the computer's choice.
// It will also display the result of the game.
function user_wins(player_choice, cpu_choice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    results_h3.innerHTML = "You Chose " + player_choice;
    result_h4.innerHTML = "Computer Chose " + cpu_choice;
    results_p.innerHTML = "You Win! " + player_choice + " beats " + cpu_choice + "!";
}

//This function increases the score of computer by 1.
// It will also display the player's choice and the computer's choice.
// It will also display the result of the game.
function computer_wins(player_choice, cpu_choice) {
    computerScore++;
    cpuScore_span.innerHTML = computerScore;
    results_h3.innerHTML = "You Chose " + player_choice;
    result_h4.innerHTML = "Computer Chose " + cpu_choice;
    results_p.innerHTML = "Computer Wins! " + cpu_choice + " beats " + player_choice + "!";
}

//This function handles a tie situation.
// It will also display the player's choice and the computer's choice.
// It will also display the result of the game.
function user_and_computer_tie(player_choice, cpu_choice) {
    results_h3.innerHTML = "You Chose " + player_choice;
    result_h4.innerHTML = "Computer Chose " + cpu_choice;
    results_p.innerHTML = "It's a tie!";
}

// This function will be called when the user clicks on the rock, paper, or scissors buttons.
// It will get the player's choice.
// It will use switch to compare the player's choice to the computer's choice.
function gaming(player_choice) {
    let cpu_choice = get_cpu_choice();
    switch (player_choice + cpu_choice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            user_wins(player_choice, cpu_choice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            computer_wins(player_choice, cpu_choice);
            break;
        case "PaperPaper":
        case "ScissorsScissors":
        case "RockRock":
            user_and_computer_tie(player_choice, cpu_choice);
            break;

    }

}


function player_choice() {

    rock_div.addEventListener("click", function() {
        gaming("Rock");
    });
    paper_div.addEventListener("click", function() {
        gaming("Paper");
    });
    scissors_div.addEventListener("click", function() {
        gaming("Scissors");
    });
}

player_choice();
gaming();