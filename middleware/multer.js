const multer = require("multer");
const fs = require("fs");
const path = require("path");
// //storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(__dirname, "../public/images"), {
      recursive: true,
    });
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

//upload
const upload = multer({
  storage: storage,
}).fields(
  [{ name: "images", maxCount: 10 }],
  [{ name: "upload", maxCount: 10 }]
);

module.exports = { upload };
