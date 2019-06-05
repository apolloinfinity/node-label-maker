const path = require("path");
const fs = require("fs");

const pdfDocument = require("pdfkit");
const moment = require("moment");

const rootDir = require("../utils/path");

exports.getLabels = async (req, res) => {
    res.send('<h1>Hello</h1>')
}

exports.createLabel = async (req, res) => {
    // Destructured body 
    const { number, description, lot, quantity, warehouse, received, dataURL } = await req.body;
    // console.log(dataURL)
    const doc = new pdfDocument({
        layout: "landscape",
        size: [200, 450],
        margin: 10
    });

    const labelName = new Date().toISOString().replace(/:/g, "-");
    const destination = "test";
    const printDate = moment().format("L");

    function itemLabel(itemNum, description, labelName, lot, loc, qr) {

        const imgLoc = path.join(rootDir, "assets", "bolts", "hex-bolt.jpg");
        const jobName = `${itemNum}-${labelName}.pdf`;
        const inventoryPath = path.join(rootDir, "test", jobName);

        doc.pipe(fs.createWriteStream(inventoryPath));
        doc.pipe(res);
        doc.image(qr, 10, 10, {
            fit: [150, 150],
            align: "center",
            valign: "top",
        });
        doc.image(imgLoc, 200, 10, {
            fit: [190, 180],
            align: "right",
            valign: "top"
        })
        doc.font("Helvetica")
            .fontSize(18)
            .text(`${itemNum} - ${lot}`, 190, 100);
        doc.text(description, 190, 120);
        doc.text(`Location: ${loc}`, 190, 140);
        doc.end()
    }

    itemLabel(number, description, labelName, lot, warehouse, dataURL)

}