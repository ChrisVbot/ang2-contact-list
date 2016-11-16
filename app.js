var express = require('express');
var app = express();
var path = require("path");
var PORT = process.env.port || 8080;

//connect to Massive and get db instance
var massive = require("massive")
var connectionString = "postgres://development:development@localhost/ang2contacts"
var massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance)
var db = app.get('db')

app.use(express.static(path.join(__dirname, 'angular-my-app')));

app.get("/app/contactslist", (req, res) => {
  console.log('got em')
});

app.get("*", (req, res) => {
  db.run("select * from contacts WHERE id=$1", [1], function(err, contact){
    console.log(contact[0])
  })
  res.sendFile(path.join(__dirname + '/angular-my-app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});

module.exports = app;