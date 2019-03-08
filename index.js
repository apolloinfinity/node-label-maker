const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/qr", require("./routes/barcode"))
app.use("/api", require("./routes/labels"));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));