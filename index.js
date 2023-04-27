const express = require("express");
const app = express();
const port = process.env.PORT || 5000 || 8080;
const sass = require("node-sass-middleware");

app.set("view engine", "pug");

app.use(
  sass({
    // quiet: true
    src: __dirname, // Input SASS files
    dest: __dirname + "/public", // Output CSS
    debug: true // obvious
  })
);
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    msg: "Button1",
    msg2: "button2"
  });
});

app.listen(port);
