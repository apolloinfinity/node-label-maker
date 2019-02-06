const express = require("express");

const router = express.Router();

const labelController = require("../controllers/labelsController");

router.get("/labels");
router.post("/labels", labelController.createLabel);

module.exports = router;