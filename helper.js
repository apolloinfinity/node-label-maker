const fs = require('fs');

exports.createLabel = (img, dir, dt) => {
  dt.pipe(fs.createWriteStream(dir));
  dt.image(img, 5, 5, { width: 190 });
  dt.end();
};
