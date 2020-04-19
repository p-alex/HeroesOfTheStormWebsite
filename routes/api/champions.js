const express = require("express");
const router = express.Router();

//Champion model

const Champion = require("../../models/Champions");

// @route GET api/champions
// @desc Get all champions
// @access PUBLIC

router.get("/", (req, res) => {
  Champion.find()
    .then((champs) => res.json(champs))
    .catch((err) => console.log(err));
});

module.exports = router;
