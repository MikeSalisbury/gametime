const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  authId: String,
  firstName: String,
  lastName: String,
  email: String
},
  {timestamps: true}
);

mongoose.model('users', userSchema);
