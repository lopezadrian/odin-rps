const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const scoreSection = document.querySelector('.score-section');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const choiceDiv = document.createElement('div');
const resultDiv = document.createElement('div');
const gameOverDiv = document.createElement('div');

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

function getRoundResult(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        capitalize = playerSelection[0].toUpperCase();
        playerSelection = playerSelection.replace(playerSelection[0], capitalize);
        result = `The round's a tie! ${playerSelection} ties ${computerSelection}`;
        return result;
    }
    
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                result = 'You lose the round! Paper beats rock';
            } else if (computerSelection === 'scissors') {
                result = 'You win the round! Rock beats scissors';
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result = 'You win the round! Paper beats rock';
            } else if (computerSelection === 'scissors') {
                result = 'You lose the round! Scissors beats paper';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                result = 'You lose the round! Rock beats scissors';
            } else if (computerSelection === 'paper') {
                result = 'You win the round! Scissors beats paper';
            }
            break;
        default:
            console.log('iunno');
    }

    return result;
}

function playRound(e) {
    let playerSelection = this.classList.value;
    let computerSelection = getComputerChoice();

    choiceDiv.textContent = `You chose ${playerSelection}, and the computer chose ${computerSelection}`;
    results.appendChild(choiceDiv);

    let result = getRoundResult(playerSelection, computerSelection);

    resultDiv.textContent = result;
    results.appendChild(resultDiv);

    updateScore(result);
}

function checkForGameOver() {
    if (playerScore.textContent === '5') {
        gameOverDiv.textContent = 'You won 5 times! Game over.'
        scoreSection.appendChild(gameOverDiv);
        return;
    }
    if (computerScore.textContent === '5') {
        gameOverDiv.textContent = 'The computer won 5 times! Game over.'
        scoreSection.appendChild(gameOverDiv);
        return;
    }
}

function updateScore(roundResult) {
    let playerScoreInt = parseInt(playerScore.textContent);
    let computerScoreInt = parseInt(computerScore.textContent);

    if (playerScoreInt === 5 || computerScoreInt === 5) {
        playerScoreInt = 0;
        playerScore.textContent = `${playerScoreInt}`;
        computerScoreInt = 0;
        computerScore.textContent = `${computerScoreInt}`;
        scoreSection.removeChild(gameOverDiv);
    }

    if (roundResult.includes('win')) {
        playerScoreInt++;
        playerScore.textContent = `${playerScoreInt}`;
        checkForGameOver();
    }

    if (roundResult.includes('lose')) {
        computerScoreInt++;
        computerScore.textContent = `${computerScoreInt}`;
        checkForGameOver();
    }
}

console.log(buttons);
buttons.forEach(button => button.addEventListener('click', playRound));
