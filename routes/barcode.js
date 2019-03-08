const express = require('express');

const qrcode = require('../controllers/barcodeGenerator.Controller');

const router = express.Router();

router.get('/', qrcode.qr);

module.exports = router;