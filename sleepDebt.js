const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 8
    break;
    case'tuesday':
    return 10
    break;
    case 'wednesday':
    return 11
    break;
    case 'thursday':
    return 9
    break;
    case 'friday':
    return 8
    case 'saturday':
    return 11
    break;
    case 'sunday':
    return 9
    break;
  }

}
//console.log(getSleepHours('tuesday'))

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
//console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours *7;
} 
console.log('Your actual sleeping hours is: ' + getActualSleepHours())
console.log('Your ideal sleeping hours is: ' + getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep'); 
  } else if (actualSleepHours > idealSleepHours) { 
    console.log('You got more sleep than needed, you need to sleep ' + (actualSleepHours - idealSleepHours) + ' less')

  } else {
    console.log('You should get some rest!, you need at least ' + (idealSleepHours - actualSleepHours) + ' more')
  }
}
console.log(calculateSleepDebt())