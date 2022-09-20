let playerScore = 0
let computerScore = 0
let pScore = "0"
let cScore = "0";




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
        computerScore++

        return 'you lost! computer picked scissors'
      
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'you won! computer picked paper'
       
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! computer picked scissors!'}
      
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lost! computer picked paper!'}
   
     else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++  
        return 'You lost! computer picked scissors!'}
       
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++
            return 'You won! computer picked rock!'}
        
    }

     

 
  





    function game(select)  {
        {
            const playerSelection = select.toLowerCase();
            const computerSelection = getComputerChoice()
            
            pScore = "player = " + playerScore;
            cScore = "computer=" + computerScore;
            console.log(playRound(playerSelection, computerSelection));

            document.getElementsByClassName('playerScore')[0].innerHTML = pScore;
            document.getElementsByClassName('computerScore')[0].innerHTML = cScore;

            
         }if (playerScore > computerScore) {
            return console.log('YOU WON !')
         }else if (playerScore<computerScore) {
            return console.log('you got beat by computer')
         }else {
            return console.log('you tied with the computer')
         }
    }



