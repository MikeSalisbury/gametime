const mongoose = require('mongoose');
const User = mongoose.model('users');
const Game = mongoose.model('games');

// this file will be to seed our database

// users
// authId: String,
// firstName: String,
// lastName: String,
// email: String

const user1 = new User({
  firstName: "Ben",
  lastName: "Salisbury",
  email: "ben@gmail.com"
});

const user2 = new User({
  firstName: "Chris",
  lastName: "Salisbury",
  email: "chris@gmail.com"
});

const user3 = new User({
  firstName: "Demo",
  lastName: "User",
  email: "demo@gmail.com"
});

// games
// gameManager: Number,
// title: String,
// sport: String,
// numPlayers: Number,
// players: Array,
// location: String,
// time: Date,
// lat: String,
// lng: String,
const game1 = new Game({
  gameManager: user1.id,
  title: "Cataldi Hoopers!",
  sport: "Basketball",
  numPlayers: 12,
  location: "2900 Cataldi Dr, San Jose, CA 95132",
  time: new Date("2018-03-01T10:00:00Z"),
});

const game2 = new Game({
  gameManager: user2.id,
  title: "VMC ER Flag Football!",
  sport: "Football",
  numPlayers: 12,
  location: "3300 Quimby Rd, San Jose, CA 95148",
  time: new Date("2018-03-01T10:00:00Z"),
});

const game3 = new Game({
  gameManager: user1.id,
  title: "Midnight Ballers!",
  sport: "Basketball",
  numPlayers: 15,
  location: "3108 Sierra Rd, San Jose, CA 95132",
  time: new Date("2018-03-01T10:00:00Z"),
});

const game4 = new Game({
  gameManager: user3.id,
  title: "Cisco Ballers",
  sport: "Basketball",
  numPlayers: 20,
  location: "Cisco Building 24, 510 McCarthy Blvd, Milpitas, CA 95035",
  time: new Date("2018-03-01T10:00:00Z"),
});
