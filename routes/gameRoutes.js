const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const app = require('../index.js');
const Game = mongoose.model('games');
const User = mongoose.model('users');

module.exports = app => {

  app.get('/api/games/index', (req, res) => {
    Game.find({});
  });

  app.get('/api/games/:id', (req, res) => {
    Game.find( { "_id": ObjectId(req.params.id) } )
    .then(game => res.send(game));
  });
  // req.body will allow us to manipulate the payload received (via body-parser)

  app.post('/api/games', (req, res) => {

    const {
      gameManager,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      startDatetime,
      endDatetime
    } = req.body;

    players.push(req.user);

    let game = new Game({
      gameManager,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      startDatetime,
      endDatetime
    });

    game.save();
    console.log(game);
    console.log("SEPARATOR");
    console.log(JSON.stringify(game));
    res.send(game);
  });


};
