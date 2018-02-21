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

    const {
      gameManager,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      time,
      lat,
      lng
    } = req.body;

    console.log(req.body);

    const game = new Game({
      gameManager,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      time,
      lat,
      lng,
    });

    game.save();
    res.send(game);
  });


};
