const { imageScema } = require("../model");

let addImageService = (body) => {
  return imageScema.create(body);
};

let getImageService = () => {
  return imageScema.find();
};
module.exports = {
  addImageService,
  getImageService,
};
