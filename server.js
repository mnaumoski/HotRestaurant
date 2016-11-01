//Dependencies
//===================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setup Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Listen when serves is running
app.listen(PORT, function(){
  console.log("App listens on port " + PORT);
});

// routes

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'home.html'));
}); 

app.get('/reservation', function(req, res){
  res.sendFile(path.join(__dirname, 'reservation.html'));
});

app.get('/view', function(req, res){
  res.sendFile(path.join(__dirname, 'view.html'));
});

// Create new tables - takes in JSON input
// app.post('/api/new', function (req, res) {
//   var newTable = req.body;
  
//   newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();

//   console.log(newTable);

//   characters.push(newTable);

//   res.json(newTable);
// });