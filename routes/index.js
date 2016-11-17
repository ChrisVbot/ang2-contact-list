var express = require('express')
var router = express.Router();
var path = require('path');

router.get("/api/contacts", (req, res) => {
  console.log(req);
  // db.run("select * from contacts", function(err, contacts){
  //   console.log(contacts)
  //   res.send(contacts)
  // });
});

router.get("*", (req, res) => {
  // db.run("select * from contacts", function(err, contact){
  //   console.log(contact[0])
  // })
  res.sendFile(path.join(__dirname, '../angular-my-app', 'index.html'));
});

module.exports = router;

