var express = require("express");
var app = express();
var path = require("path");

app.listen(3000, (req, res) => {
  console.log("running");
});

// var bodyParser = require("body-parser");

var index = require("./routes/index");
var members = require("./routes/members");

// var port = 3000;

// View

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

// Static folder

app.use(express.static(path.join(__dirname, "src")));

// body-parser

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", index);
app.use("/api", members);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// app.listen(port, function() {
//   console.log("Server started on port " + port);
// });
