const mongoose = require('mongoose');
const app = require('../index.js');
const Game = mongoose.model('games');

module.exports = app => {

  app.get('/api/games/index', (req, res) => {
    Game.find({});
  });

  app.get('/api/games/:id', (req, res) => {
    Game.find({id: req.id});
  });
  // req.body will allow us to manipulate the payload received (via body-parser)

  app.post('/api/games', (req, res) => {
    console.log(req.body);

    const {
      gameManager,
      title,
      sport,
      numPlayers,
      players,
      location,
      time,
      lat,
      lng
    } = req.body;

    const game = new Game({
      gameManager: Number,
      title: String,
      sport: String,
      numPlayers: Number,
      players: Array,
      location: String,
      time: Date,
      lat: String,
      lng: String,
    });

    game.save();
    res.send(game);
  });


};
