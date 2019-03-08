const express = require("express");

const router = express.Router();

const labelController = require("../controllers/label.Controller");

router.get("/labels", labelController.getLabels);
router.post("/labels", labelController.createLabel);

module.exports = router;