//Import modules
const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
//const path = require("path");
require("dotenv").config();
// Server PORT number
const port = process.env.PORT || 8080;

//routes file import
const homeRouter = require("./src/routes/home.js");
const documentRouter = require("./src/routes/document.js");
const userRouter = require("./src/routes/user.js");

app.use("/api/home",homeRouter);
app.use("/api/document",documentRouter);
app.use("/api/user",userRouter);

app.listen(port, () => {
  console.log(`Backend App listening on port ${port}`);
})