const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Stephen',
    lastName: 'Aihoon',
    age: 13
  },
  {
    firstName: 'Samuel',
    lastName: 'Fiifi',
    age: 12
  }
  ],
  _games: [
    {opponent: 'Broncos', teamPoints: '42', opponentPoints: 27
    },
    {opponent: 'Real Madrid',teamPoints: 14, OpponentPoints: 22
    },
    {opponent: 'Lakers', teamPoints: 98, opponentPoints: 92
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
},
addPlayer (firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this._players.push(player);
},
addGame (opponentName, teamPoints, opponentPoints) {
  let game = {
  opponentName: opponentName,
  teamPoints: teamPoints,
  opponentPoints: opponentPoints
}
 this._games.push(game) 
}
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Real Madrid', 4, 3)
team.addGame('Red Bull', 15, 7)
team.addGame('Barcelona', 4, 7)
console.log(team.games)