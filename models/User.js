const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  userid: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model('user', UserSchema)
module.exports = User