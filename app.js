var express = require('express');
var app = express();
var path = require("path");
var PORT = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'angular-my-app')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/angular-my-app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});

module.exports = app;