const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const app = require('../index.js');
const Game = mongoose.model('games');
const User = mongoose.model('users');

module.exports = app => {

  // index page
  app.get('/api/games', (req, res) => {
    Game.find().then(games => res.send(games));
  });

  // show page
  app.get('/api/games/:id', (req, res) => {
    Game.findOne( { "_id": ObjectId(req.params.id) } )
    .then(game => res.send(game));
  });
  // req.body will allow us to manipulate the payload received (via body-parser)

  app.post('/api/games', (req, res) => {

    const {
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
      "gameManager" : req.user,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      startDatetime,
      endDatetime
    });

    game.save( (err, newGame) => {
      if (err) {
        console.log(err);
        res.send(400, err.message);
      } else {
        console.log(newGame);
        res.send(newGame);
      }
    });
  });
};
