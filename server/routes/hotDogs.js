const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//GET: api/hotDogs
router.get("/", (req, res) => {
  res.send("hello");
});

//DELETE:

module.exports = router;
