const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoConnect = require("./utils/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/jobs", require("./routes/labels"));

const port = process.env.PORT || 5000;

mongoConnect(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));

});
