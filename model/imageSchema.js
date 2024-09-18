let mongoose = require("mongoose");

let imageSchema = new mongoose.Schema({
  image: {
    type: [String],
  },
});

let imageData = mongoose.model("imageSchema", imageSchema);
module.exports = imageData;
