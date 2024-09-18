let express = require("express");
let route = express.Router();
let imageRoute = require("./imageHandler.routes");

route.use("/image", imageRoute);

module.exports = route;
