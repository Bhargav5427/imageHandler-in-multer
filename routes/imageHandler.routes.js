let express = require("express");
const { upload } = require("../middleware/multer");
const { imageHandlerController } = require("../controllers");
let router = express.Router();

router.post("/postimage", upload, imageHandlerController.addImages);
router.get("/getimage", imageHandlerController.getImage);

module.exports = router;
