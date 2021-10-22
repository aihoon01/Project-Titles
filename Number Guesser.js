let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, computer, target) => {
  diff1 = Math.abs(target - human);
  diff2 = Math.abs(target - computer)
  if (human === target) {
    if (computer === target) {
      console.log('You win!')
      return true
    }
  } if (human === target) {
    if (computer !== target) {
      return true
    }
  } if (human !== target) {
    if (computer === target){
      return false
    }

} if (diff1 < diff2) {
    return true
  
  } else {
    return false
  }
}

const updateScore = detWinner => {
  if (detWinner === 'human') {
  console.log('human Score')
  humanScore += 1
  
} else if (detWinner === 'computer') {
  console.log('computer Score')
  computerScore += 1

} else {
return 'Error'
} 
} 

const advanceRound = () => {
  currentRoundNumber += 1
}

