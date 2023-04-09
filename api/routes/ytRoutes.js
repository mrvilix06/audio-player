const express = require("express");
const router = express.Router();
const youtubeController = require("../controllers/ytController");

router.get("/:id/:title", youtubeController.toMp3);

module.exports = router;
