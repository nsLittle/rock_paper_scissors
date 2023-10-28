const getUserChoice = () => {
   const userInput = prompt("Pick 'rock', 'paper', or 'scissors'");
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else if (userInput === "bomb") {
        return "WILDCARD! You win.";
    } else {
        return "Error.";
    };
};
const userChoice = getUserChoice();
//console.log(userChoice);

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
 //   console.log(randomNumber);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};
const computerChoice = getComputerChoice();
//console.log(computerChoice);

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb" && computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors") {
        return "WILDCARD! You win.";
    } else if (userChoice === "rock" && computerChoice === "rock") {
        return "Rock vs rock. It's a tie.";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "Rock vs paper. Computer wins.";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "Rock vs scissors. You win.";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "Paper vs rock. You win.";
    } else if (userChoice === "paper" && computerChoice === "paper") {
        return "Paper vs paper. It's a tie.";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "Paper vs scissors. Computer wins.";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "Scissors vs rock. Computer wins.";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "Scissors vs paper. You win.";
    } else if (userChoice === "scissors" && computerChoice === "scissors") {
        return "Scissors vs scissors. It's a tie.";
    };
};

const playGame = () => {
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
