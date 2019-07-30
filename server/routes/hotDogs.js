const express = require("express");

const router = express.Router();

const HotDog = require("../models/HotDog");

//GET: api/hotDogs
router.get("/", (req, res) => {
  HotDog.find()
    .then(hotDogs => res.json(hotDogs))
    .catch(err => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

//GET: api/hotDogs/:id
router.get("/:id", (req, res) => {
  HotDog.findById(req.params.id)
    .then(hotDog => res.json({ hotDog }))
    .catch(err => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

//DELETE: api/hotDogs/:id
router.delete("/:id", (req, res) => {
  HotDog.findById(req.params.id).then(hotDog => {
    hotDog
      .remove()
      .then(() => res.json({ msg: true }))
      .catch(() => res.status(500).json({ msg: "Unable to delete hot dog" }));
  });
});

//POST: api/hotDogs/create
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
