const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  gameManager: Number,
  title: String,
  sport: String,
  numPlayers: Number,
  players: Array,
  location: String,
  time: Date,
  lat: String,
  Lng: String,

},
{timestamps: true}
);

mongoose.model('games', gameSchema);
