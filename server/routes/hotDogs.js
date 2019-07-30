const express = require("express");

const router = express.Router();

const HotDog = require("../models/HotDog");

//GET: api/hotDogs
router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/create", (req, res) => {
  HotDog.findOne({ name: req.body.name }).then(hotDog => {
    if (hotDog) {
      return res
        .status(400)
        .json({ name: "Hot dog with such name already exists" });
    } else {
      const newHotDog = new HotDog({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        memo: req.body.memo
      });
      newHotDog
        .save()
        .then(hotdog => res.json(hotdog))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
