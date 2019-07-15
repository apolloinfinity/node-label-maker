const fs = require('fs');
const path = require('path');

const PDFDocument = require('pdfkit');

const label = require('./helper');

exports.print = async (req, res) => {
	try {
		const { imgData } = req.body;
		const date = new Date().toISOString().replace(/:/g, '-');
		const labelName = `${date}.pdf`;
		const saveFolder = path.join(__dirname, 'data', labelName);
		// console.log(imgData);
		const doc = new PDFDocument({
			size: [ 200, 200 ]
		});

		label.createLabel(imgData, saveFolder, doc);

		res.status(201);
		res.send('Saved');
	} catch (err) {
		console.error(err);
	}
};
