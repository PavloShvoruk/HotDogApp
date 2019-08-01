const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const hotDogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  memo: {
    type: String,
    required: false
  }
});

module.exports = HotDog = mongoose.model("hotdogs", hotDogSchema);
