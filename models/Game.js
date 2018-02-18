const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  gameManager: Number,
  title: String,
  sport: String,
  numPlayers: Number,
  skill: String,
  players: Array,
  location: String,
  startDatetime: Date,
  endDatetime: Date,
  lat: String,
  lng: String,

},
{timestamps: true}
);

mongoose.model('games', gameSchema);
