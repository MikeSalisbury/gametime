const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  authId: {type: String, required : true},
  firstName: {type: String, required : true},
  lastName: {type: String, required : true},
  email: {type: String, required : true}
},
  {timestamps: true}
);

mongoose.model('users', userSchema);
