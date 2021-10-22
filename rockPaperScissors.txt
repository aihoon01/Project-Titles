const getUserChoice = userInput => {
  userInput = userInput.toLowerCase() 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error Message')
}
}
/*getUserChoice('paper')
console.log(getUserChoice('Paper')) */

const getComputerChoice = () => {
  const randomNumbers = Math.floor(Math.random() * 3)
  switch (randomNumbers) {
    case 0:
    return 'rock'
    case 1:
    return 'paper'
    case 2:
    return 'scissors'
  }
}
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return ('The game was a tie')
  } if (userChoice === 'bomb') {
    return 'User Won!'
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'User won!'
    }

    } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      } 
      }
    }

const playGame = () => {
 const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice)
  console.log('Computer threw: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}
console.log(playGame())

    

