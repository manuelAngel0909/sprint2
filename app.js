const express = require("express");
const app = express();
const path = require('path')

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./views/productDetail.html"));

});

app.listen(4021, () => console.log("running on port 4021"));
