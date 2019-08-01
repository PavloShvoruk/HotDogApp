const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Middlewares
app.use(cors());
app.use(express.json({ extended: false }));

//Set storage engine
// const storage = multer.diskStorage({
//   destination: "./public/images/",
//   filename: function(req, file, callback) {
//     callback(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({
//     storage: storage
// }).single('');

//public folder
//Handle prod
if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(express.static(__dirname + "/public/"));
  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const hotDogs = require("./routes/hotDogs");
app.use("/api/hotDogs", hotDogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
