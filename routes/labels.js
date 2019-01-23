const express = require("express");

const router = express.Router();

const labelController = require("../controllers/labelsController");

router.get("/labels", labelController.printLabels);
router.post("/labels");

module.exports = router;