class School {
    constructor (name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name () {
      return this._name;
    }
    get level () {
      return this._level;
    }
    get numberOfStudents () {
      return this._numberOfStudents;
    } 
    set numberOfStudents (nos) {
      if (typeof nos === 'number') {
      this._numberOfStudents = nos
    } 
      else {
        console.log('Invalid input: numberOfStudents must be set to a number')
      }
    }
  
    quickFacts () {
    console.log (`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher (substituteTeachers) {
      substituteTeachers = [];
      let randomNum = Math.floor(Math.random() * substituteTeachers.length -1);
      return substituteTeachers[randomNum];
  
    }
  }
  
  class Primary extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
      super (name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy () {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor (name, numberOfStudent) {
      super (name, 'middle', numberOfStudents);
    }
  }
  
  class High extends School {
    constructor (name, numberOfStudents, sportsTeams) {
      super (name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams () {
      return this._sportsTeams;
      console.log(sportsTeams); 
    }
  }
   const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
   lorraineHansbury.quickFacts();
   School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'Ja,es Harden', 'Jason Terry', 'Manu Ginobli']);
  
   const alSmith = new High ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track', 'Field']);
   console.log(alSmith.sportsTeams);
  
   class SchoolCatalog {
     constructor (School) {
       this._school = school;
     }
     get school() {
       return this._shcool;
     }
     getSchool (schools) {
       let randomPick = Math.floor(Math.random() * schools.length)
       return schools[randomPick]; 
     }
   }