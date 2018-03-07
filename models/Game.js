const mongoose = require('mongoose');
const { Schema } = mongoose;


// players: [{ type: Schema.Types.ObjectId, ref: 'User'}] to store OID as reference to users
const gameSchema = new Schema({
  gameManager: String,
  gameImage: String,
  title: String,
  sport: String,
  numPlayers: Number,
  skill: String,
  players: Array,
  location: String,
  startDatetime: Date,
  endDatetime: Date,
  lat: String,
  lng: String
},
{timestamps: true}
);

mongoose.model('games', gameSchema);
