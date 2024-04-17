const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    defalut: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
