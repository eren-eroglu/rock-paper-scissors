
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You Tied!, you both picked rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors!'
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper!'

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'you lost! computer picked scissors'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you won! computer picked paper'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! computer picked scissors!'}
     else if (playerSelection === 'rock' && computerSelection === 'paper') {
     return 'You lost! computer picked paper!'}
     else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! computer picked scissors!'}
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
         return 'You won! computer picked rock!'}
    }
