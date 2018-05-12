const mongoose = require('mongoose');
const { Schema } = mongoose;


// players: [{ type: Schema.Types.ObjectId, ref: 'User'}] to store OID as reference to users
const gameSchema = new Schema({
  gameManager: {type: String, required : true},
  title: {type: String, required : true},
  sport: {type: String, required : true},
  numPlayers: {type: Number, required : true},
  skill: {type: String, required : true},
  players: {type: Array, required : true},
  location: {type: String, required : true},
  startDatetime: {type: Date, required : true},
  endDatetime: {type: Date, required : true},
  image: String,
  lat: String,
  lng: String
},
{timestamps: true}
);

mongoose.model('games', gameSchema);
