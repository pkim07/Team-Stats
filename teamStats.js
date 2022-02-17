// Creating an empty object named team.
// Adding 2 properties to team object. It will be named with _players and _games to show that this value should not be altered.
// Populating team property
const team = {
  _players: [
    {
      firstName: "Lionel",
      lastName: "Messi",
      postion: "Right Wing",
      age: 34,
    },
    {
      firstName: "Luis",
      lastName: "Suarez",
      postion: "Striker",
      age: 35,
    },
    {
      firstName: "Neymar",
      lastName: "da Silva Santos",
      position: "Left Wing",
      age: 30,
    },
  ],
  _games: [
    {
      opponent: "Real Madrid",
      teamPoints: 5,
      opponentPoints: 1,
    },
    {
      opponent: "Bayern Munich",
      teamPoints: 4,
      opponentPoints: 2,
    },
    {
      opponent: "Atletico Madrid",
      teamPoints: 4,
      opponentPoints: 2,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, position, age) {
    // Creating a player object and adding them to team's players array.
    const player = {
      firstName: firstName,
      lastName: lastName,
      postion: position,
      age: age,
    };

    this.players.push(player);
  },

  addGame(opponentName, teamPoint, oppsPoint) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoint,
      opponentPoints: oppsPoint,
    };
    this.games.push(game);
  },
};
//Invoking the addPlayer function to add players
team.addPlayer("Sergio", "Busquets", "CDM", 32);
team.addPlayer("Xavi", "Hernandez", "LMF", 38);
team.addPlayer("Andres", "Iniesta", "RMF", 37);

console.log(team._players);

//Invoking the addGame function to add games
team.addGame("Athletic Club", 2, 3);
team.addGame("Alaves", 1, 0);
team.addGame("Granda", 1, 1);
console.log(team._games);
