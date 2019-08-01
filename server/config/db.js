const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    // console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit processs
    process.exit(1);
  }
};

module.exports = connectDB;
