const path = require("path");
const fs = require("fs");

const pdfDocument = require("pdfkit");
const moment = require("moment");

const rootDir = require("../utils/path");

exports.getLabels = async (req, res) => {
    res.send('<h1>Hello</h1>')
}

exports.createLabel = async (req, res) => {

    try {
        res.send('<h1>HEllo</h1>');


    } catch (err) {
        console.error(err);
    };

}