const mongoose = require('mongoose');
const { Schema } = mongoose;
// lat: String,
// lng: String,
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

},
{timestamps: true}
);

mongoose.model('games', gameSchema);
