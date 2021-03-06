const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/nytmerndb'
);
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
