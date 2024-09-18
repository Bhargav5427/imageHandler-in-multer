const uploadImage = require("../model/cloudinary");
const { v4: uuidv4 } = require("uuid");
const { imageHandlerService } = require("../services");

const addImages = async (req, res) => {
  const files = req.files["images"];
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  try {
    const uploadPromises = files.map(async (file) => {
      const publicId = `${uuidv4()}_${file.originalname}`;
      const result = await uploadImage(file.path, publicId);
      return result;
    });
    const uploadResults = await Promise.all(uploadPromises);
    const imageUrls = uploadResults.map((result) => result.secure_url);

    let finalResult = {
      image: imageUrls,
    };

    let result = await imageHandlerService.addImageService(finalResult);
    if (!result) {
      throw new Error("something went worng");
    }
    res
      .status(201)
      .json({ message: "Images uploaded successfully", data: result });
  } catch (error) {
    console.error("Error uploading images:", error.message);
    res
      .status(500)
      .json({ error: `Failed to upload images: ${error.message}` });
  }
};

let getImage = async (req, res) => {
  try {
    let result = await imageHandlerService.getImageService();
    if (!result) {
      throw new Error("something went worng");
    }
    res.status(200).json({ message: "Images get successfully", data: result });
  } catch (error) {
    console.error("Error geting images:", error.message);
    res.status(500).json({ error: `Failed to get images: ${error.message}` });
  }
};
module.exports = {
  addImages,
  getImage,
};
