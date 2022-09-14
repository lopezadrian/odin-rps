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
            console.log('iunno cpu');
    }

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('Enter choice for rock, paper, scissors');
    playerChoice = playerChoice.trim()
    playerChoice = playerChoice.toLowerCase();
    if (!(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors')) {
        console.log(`${playerChoice} is not a valid option, please enter "rock", "paper", or "scissors".`)
    }
    return playerChoice;
}
function getRoundResult(playerSelection, computerSelection) {
    let result;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                result = 'You lose! Paper beats rock';
            } else if (computerSelection === 'scissors') {
                result = 'You win! Rock beats scissors';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result = 'You win! Paper beats rock';
            } else if (computerSelection === 'scissors') {
                result = 'You lose! Scissors beats paper';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                result = 'You lose! Rock beats scissors';
            } else if (computerSelection === 'paper') {
                result = 'You win! Scissors beats paper';
            }
            break;
        default:
            console.log('iunno');
    }

    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        capitalize = playerSelection[0].toUpperCase();
        playerSelection = playerSelection.replace(playerSelection[0], capitalize);
        result = `It's a tie! ${playerSelection} ties ${computerSelection}`;
        return result;
    }
    
    result = getRoundResult(playerSelection, computerSelection);

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameResult;
    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`You chose ${playerSelection}`);
        console.log(`The computer chose ${computerSelection}`);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult)
        if (roundResult.includes('win')) {
            playerScore++;
        }
        if (roundResult.includes('lose')) {
            computerScore++;
        }
    }

    if (playerScore === computerScore) {
        gameResult = 'tie';
    } else if (playerScore > computerScore) {
        gameResult = 'win';
    } else {
        gameResult = 'lose';
    }
    console.log(`The score was ${playerScore}:${computerScore}, you ${gameResult}!`)
}

game();