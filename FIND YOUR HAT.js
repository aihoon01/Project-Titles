const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//field Class
class Field {
  constructor(field) {
    this.field = field;
  }
  print() {
    for (let i = 0; i<this.field.length; i++) {
      console.log(this.field[i].join(""));
    }
  }
  
}
// Our Field
const myField = new Field([
   ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.print()

//Start Game
let gameState = '';
let i = 0;
let j = 0;
while (gameState != 'loss' || gameState != 'win you have found your hat') {
  //Defining current position
 let currentPosition = myField.field[i][j];
 //initiating move
 let move = prompt("Choose a move: ")
 // test
 if((move == 'w' && (i == 0 || myField.field[i-1][j] == hole || myField.field[i-1][j] == [pathCharacter]))) {
   gameState = 'loss';
   break;
 }
 else if ((move == 'a' && (j == 0 || myField.field[i][j-1] == hole || myField.field[i][j-1] == pathCharacter))) {
 gameState = 'loss';
 break;
}
else if ((move == 's' && (i == -1 || myField.field[i+1][j] == hole || myField.field[i+1][j] == pathCharacter))){
gameState = 'loss'
break;
}
else if((move == 'd' && (j == -1 || myField.field[i][j+1] == hole || myField.field[i][j+1] == pathCharacter))) {
  gameState = 'loss'
  break;
}
else if((move == 'w' && myField.field[i-1][j] == hat) || (move == 's' && myField.field[i+1][j] == hat) || (move == 'a' && myField.field[i][j-1] == hat) || (move == 'd' && myField.field[i][j+1] == hat)) {
  gameState = 'Win you have found your hat'
  break;
}
else if(move == 'w' && myField.field[i-1][j] == fieldCharacter) {
  myField.field[i-1][j] = pathCharacter;
  myField.print();
  i -=1;
}
else if(move == 's' && myField.field[i+1][j] == fieldCharacter) {
myField.field[i+1][j] = pathCharacter;
myField.print()
i +=1;
}
else if(move == 'a' && myField.field[i][j-1] == fieldCharacter) {
  myField.field[i][j+1] == pathCharacter;
  myField.print()
  j -=1;
}
else if(move == 'd' && myField.field[i][j+1] == fieldCharacter) {
  myField.field[i][j+1] = pathCharacter;
  
  myField.print()
  j +=1;
}
}
console.log(gameState);


