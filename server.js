// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
require("main.js"

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
