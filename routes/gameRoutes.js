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
      startDatetime,
      endDatetime
    } = req.body.game;

    console.log(gameManager);
    console.log(title);
    console.log(sport);
    console.log(skill);
    console.log(numPlayers);
    console.log(players);
    console.log(location);
    console.log(startDatetime);
    console.log(endDatetime);

    const game = new Game({
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
    res.send(game);
  });


};
