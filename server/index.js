const express = require("express");
const cors = require("cors");

const app = express();

//Middlewares
app.use(cors());

const hotDogs = require("./routes/hotDogs");
app.use("/api/hotDogs", hotDogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
