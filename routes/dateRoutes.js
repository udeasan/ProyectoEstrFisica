const express = require('express');
const router = express.Router();

const { getDate, postDate, putDate, deleteDate, getBusinessDate } = require("../controllers/dateController.js");
const { protect } = require("../MiddleWare/authMiddleware.js");
router.get("/date", protect, getDate);
router.post("/date", protect, postDate);
router.put("/date/:id", protect, putDate);
router.delete("/date/:id", protect, deleteDate);
router.get("/business/date", protect, getBusinessDate)

module.exports = router;