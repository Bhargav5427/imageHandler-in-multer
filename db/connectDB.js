let mongoose = require("mongoose");
let connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`DataBase connected successfully ${process.env.MONGO_URL}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
