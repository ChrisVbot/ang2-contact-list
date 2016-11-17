var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var PORT = process.env.port || 8080;

//connect to Massive and get db instance
var massive = require("massive")
var connectionString = "postgres://development:development@localhost/ang2contacts"
var massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance)
var db = app.get('db')

app.use(express.static(path.join(__dirname, 'angular-my-app')));

app.get("/api/contacts", (req, res) => {
  db.run("select * from contacts", function(err, contacts){
    var contactList = []
    contacts.forEach(function (c) {
      var contact = {}
      contact.id = c.id
      contact.name = c.name
      contact.age = c.age
      contact.phone = c.phone
      contactList.push(contact)
    });

    console.log(contactList)
    res.send(contactList)
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/angular-my-app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});

module.exports = app;