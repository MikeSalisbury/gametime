const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const app = require('../index.js');
const Game = mongoose.model('games');
const User = mongoose.model('users');

module.exports = app => {

  // index page
  app.get('/api/games', (req, res) => {
    Game.find().then(games => res.status(200).send(games));
  });

  // game filter
  app.post('/api/filteredSport', (req, res) => {
    Game.find({sport: req.body.sport})
    .then(games => res.status(200).send(games));
  });

  // show page
  app.get('/api/games/:id', (req, res) => {
    Game.findOne( { "_id": ObjectId(req.params.id) } )
    .then(game => res.status(200).send(game));
  });
  // req.body will allow us to manipulate the payload received (via body-parser)

  app.post('/api/games', (req, res) => {
    let image;
    if(!req.body.image) {
      image = 'https://jsmultisport.com/wp-content/uploads/2017/07/sports.jpg';
    } else {
      image = req.body.image;
    }

    const {
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      startDatetime,
      endDatetime,
      lat,
      lng
    } = req.body;

    players.push(req.user);

    Game.create({
      "gameManager" : req.user,
      image,
      lat,
      lng,
      title,
      sport,
      skill,
      numPlayers,
      players,
      location,
      startDatetime,
      endDatetime
    }, (err, newGame) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.status(200).send(newGame);
      }
    });
  });
};
