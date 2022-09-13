function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log('iunno');
    }

    return computerChoice;
}

console.log(`The computer chose ${getComputerChoice()}`);

function getPlayerChoice() {
    let playerChoice = prompt('Enter choice for rock, paper, scissors');
    playerChoice = playerChoice.trim()
    playerChoice = playerChoice.toLowerCase;
    if(playerChoice != ('rock' || 'paper' || 'scissors')) {
        console.log(`${playerChoice} is not a valid option, please enter "rock", "paper", or "scissors".`)
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if(playerSelection === computerSelection) {
        result = `No winner! ${playerSelection} ties ${computerSelection}`;
    }
    
    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                result = 'You lose! Paper beats rock';
            }
            if (computerSelection === 'scissors') {
                result = 'You win! Rock beats scissors';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result = 'You win! Paper beats rock';
            }
            if (computerSelection === 'scissors') {
                result = 'You lose! Scissors beats paper';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                result = 'You lose! Rock beats scissors';
            }
            if (computerSelection === 'paper') {
                result = 'You win! Scissors beats paper';
            }
            break;
        default:
            console.log('iunno')
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();