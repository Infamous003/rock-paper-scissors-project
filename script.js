//     This function returns the player move     //
function getPlayerMove(playerMove) {
  return playerMove;
}


//     This function returns the computer move     //
function getComputerMove() {
  let computerChoice = Math.random();

  //console.log(computerChoice);
  if(computerChoice > 0 && computerChoice <= 0.3) {
    return 'rock';
  }else if (computerChoice > 0.3 && computerChoice <= 0.6) {
    return 'paper';
  }else if(computerChoice > 0.6 && computerChoice <= 1) {
    return 'scissors';
  }
}


//     This function displays the player move & the computer move     //
function showMove(playerMove, computerMove) {
  let showPlayerMoveEle = document.querySelector('.player');
  let showComputerMoveEle = document.querySelector('.computer');

  showPlayerMoveEle.innerText = 'You: ' + playerMove;
  showComputerMoveEle.innerText = 'Computer: ' + computerMove;
}


//     This function plays the game     //
function playGame(playerMove, computerMove) {
  showMove(playerMove, computerMove);

  let resultElement = document.querySelector('.js-result');
  
  if(playerMove === computerMove) {
    resultElement.innerHTML = 'Draw';
  }else{
    if(playerMove === 'rock') {
      if(computerMove === 'paper'){
        resultElement.innerText = 'You lose';
      }else {
        resultElement.innerText = 'You win';
      }
    }else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
        resultElement.innerText = 'You win';
      }else{
        resultElement.innerText = 'You lose';
      }
    }else if(playerMove === 'scissors') {
      if(computerMove === 'rock'){
        resultElement.innerText = 'You lose';
      }else {
        resultElement.innerText = 'You win';
      }
    }
  }
}

/*                      My first approach to do solve this project                                                */
/*    In this approach, I                                               */

// function chosenOption(option) {
//   //This code is for display what the player has chosen
//   let showPlayerOptionElement = document.querySelector('.player');
//   showPlayerOptionElement.innerText = 'You: '+ option;
//   //This code is for displaying what the computer has chosen
//   let computerChoice = getComputerDecision();
//   console.log(computerChoice);
//   let showComputerOptionElement = document.querySelector('.computer');
//   showComputerOptionElement.innerText = 'Computer: ' + computerChoice;
//   return computerChoice;
// }

// function getComputerDecision() {
//   let computerChoice = Math.random();
//   console.log(computerChoice);
//   if(computerChoice > 0 && computerChoice <= 0.3) {
//     return 'rock';
//   }else if (computerChoice > 0.3 && computerChoice <= 0.6) {
//     return 'paper';
//   }else if(computerChoice > 0.6 && computerChoice <= 1) {
//     return 'scissors';
//   }
// }

// function playGame(playerChoice) {
//   const computerMove = chosenOption(playerChoice);
//   let resultElement = document.querySelector('.js-result');
//   console.log('Player choice is ' + playerChoice);
//   console.log(computerMove);

//   if(playerChoice === 'rock') {
//     if(computerMove === 'rock') {
//       resultElement.innerText = 'Draw';
//     }else if (computerMove === 'paper') {
//       resultElement.innerText = 'You lose';
//     }
//     else if (computerMove === 'scissors') {
//       resultElement.innerText = 'You win';
//     }
//   }else if(playerChoice === 'paper') {
//     if(computerMove === 'rock') {
//       resultElement.innerText = 'You win';
//     }else if (computerMove === 'paper') {
//       resultElement.innerText = 'Draw';
//     }
//     else if (computerMove === 'scissors') {
//       resultElement.innerText = 'You lose';
//     }
//   }else if(playerChoice === 'scissors') {
//     if(computerMove === 'rock') {
//       resultElement.innerText = 'You lose';
//     }else if (computerMove === 'paper') {
//       resultElement.innerText = 'You win';
//     }
//     else if (computerMove === 'scissors') {
//       resultElement.innerText = 'Draw';
//     }
//   }
// }
