//Require or Call Node Express function
var express = require("express");

// Sets up Node Express
var app = express();
var PORT = process.env.PORT || 3000;

// Express  to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routing/apiRoutes'), require('./routing/htmlRoutes'));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
});