const express = require("express");

const router = express.Router();

//GET: api/hotDogs
router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
