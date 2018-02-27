const mongoose = require('mongoose');
const { Schema } = mongoose;
// lat: String,
// lng: String,

// players: [{ type: Schema.Types.ObjectId, ref: 'User'}] to store OID as reference to users
const gameSchema = new Schema({
  gameManager: String,
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
