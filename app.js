const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const PORT = process.env.port || 8080;

//connect to Massive and get db instance
const massive = require("massive")
const connectionString = "postgres://development:development@localhost/ang2contacts"
const massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance)
const db = app.get('db')

app.use(express.static(path.join(__dirname, 'angular-my-app')));
app.use(bodyParser.json())

app.get("/api/contacts", (req, res) => {
  db.run("select * from contacts", function(err, contacts){
    let contactList = mapContacts(contacts);
    res.send(contactList)
    });
});
//TODO: add validation 
app.post("/api/contacts", (req, res) => {
  db.contacts.insert({name: req.body.name, age: req.body.age, phone: req.body.phone}, function(err, contact){
    console.log(contact);
    res.send(contact);
  });
});

app.get("/api/search", (req, res) => {
  let query = req.query.name
  db.run("select * from contacts WHERE name ilike $1", ["%"+query+"%"], function(err, contacts){
    let results = mapContacts(contacts)
    res.send(results);
  });
});

app.delete("/api/contacts/:id", (req, res) => {
  db.contacts.destroy({id: req.params.id}, function(err, contact){
    res.sendStatus(200);
  });
});

app.put("/api/contacts/:id", (req, res) => {
  db.contacts.update({id: req.params.id, name: req.body.name, age: req.body.age, phone: req.body.phone}, function(err, contact){
    res.send(contact);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/angular-my-app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});

function mapContacts(contacts) {
  return contacts.map(function (c) {
    let contact = {}
    contact.id = c.id
    contact.name = c.name
    contact.age = c.age
    contact.phone = c.phone
    return contact;
  });
};

module.exports = app;