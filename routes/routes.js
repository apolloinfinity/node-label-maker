const express = require('express');
const router = express.Router();

const qr = require('../controllers/barcode');

router.get('/qr', qr);

exports.module = router;
