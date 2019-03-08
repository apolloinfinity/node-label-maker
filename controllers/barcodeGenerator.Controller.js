const bwipjs = require('bwip-js');

exports.qr = async (req, res) => {
    try {
        if (req.url.indexOf("/?bcid=") !== 0) {
            res.status(404);
            res.send("BWIPJS: Unknown request format.");
            res.end();
        } else {
            bwipjs(req, res);
        }
    } catch (err) {
        console.log(err);
    }
}