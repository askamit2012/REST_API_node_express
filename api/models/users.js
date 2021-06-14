const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String, // String is shorthand for {type: String}
  age: String,
  sex: String,
  city: String,
  email: String,
  avatar: String,
});

module.exports = mongoose.model("User", userSchema);
