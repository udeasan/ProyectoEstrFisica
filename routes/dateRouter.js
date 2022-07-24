const express = require('express');
const router = express.Router();

const { getDate, postDate, putDate, deleteDate } = require("../controllers/dateController.js");

router.get("/date", getDate);
router.post("/date", postDate);
router.put("/date/:id", putDate);
router.delete("/date/:id", deleteDate);

module.exports = router;