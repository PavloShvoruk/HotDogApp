const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Middlewares
app.use(cors());

const hotDogs = require("./routes/hotDogs");
app.use("/api/hotDogs", hotDogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
