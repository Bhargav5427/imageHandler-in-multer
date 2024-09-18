let route = require("./routes");
let express = require("express");
let app = express();
require("dotenv").config();
let cors = require("cors");
const connectDB = require("./db/connectDB");

app.use(
  cors({
    config: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();
app.use("/v1", route);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
