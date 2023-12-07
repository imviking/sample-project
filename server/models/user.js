const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, default: null },
    middleName: { type: String, default: null },
    lastName: { type: String, default: null }
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
