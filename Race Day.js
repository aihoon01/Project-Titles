let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 25;

if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000
}
if (runnerAge > 18 && registeredEarly) {
  console.log(`Race number ${raceNumber}: Your race stars at 9:30am`)
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Race number ${raceNumber}: Your race starts at 11:00am`)
} else if (runnerAge < 18) {
  console.log(`Race number ${raceNumber}: your race starts at 12:30pm`)
} else {
  console.log(`Race number ${raceNumber}: See the registration desk`)
}

