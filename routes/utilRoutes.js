const express = require('express');
const router = express.Router();

const { getBusiness } = require("../controllers/utilController.js");

router.get("/business", getBusiness);

module.exports = router;