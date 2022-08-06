let playerScore = 0
let compScore = 0


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You Tied!, you both picked rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors!'
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper!'

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'you lost! computer picked scissors'
      
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'you won! computer picked paper'
       
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! computer picked scissors!'}
      
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! computer picked paper!'}
   
     else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++  
        return 'You lost! computer picked scissors!'}
       
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++
            return 'You won! computer picked rock!'}
        
    }

     

    const playerSelection = prompt('rock,paper, or scissors?');
  


    function game()  {
        for (let i = 0; i < 5; i++) {
            const computerSelection = getComputerChoice()
            console.log(playRound(playerSelection, computerSelection));
         }if (playerScore > compScore) {
            return 'YOU WON !'
         }else if (playerScore<compScore) {
            return 'you got beat by computer'
         }else {
            return 'you tied with the computer'
         }
    }

alert(game())

