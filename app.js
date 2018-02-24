var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()
var PORT = 3000;

var tables = [
  {
    tableId: 1,
    occupant: 'null'
  }, {
    tableId: 2,
    occupant: 'null'
  }, {
    tableId: 3,
    occupant: 'null'
  }, {
    tableId: 4,
    occupant: 'null'
  }, {
    tableId: 5,
    occupant: 'null'
  }
]

var waitList = []

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", function(req, res) {
  res.json(tables)
})

app.get("/api/waitlist", function(req, res) {
  res.json(waitList)
})

app.post("/reserve", function(req, res) {

  var reservation = req.body
  var seated = false;

  for (var x = 0; x < tables.length; x++) {
    if (tables[x].occupant === 'null') {
      tables[x].occupant = reservation
      seated = true
      break;
    }
  }

  if (seated === false) {
    waitList.push(reservation)
  }

  res.sendFile(path.join(__dirname, "tables.html"))

})

app.listen(PORT, function() {
  console.log("app listening on port " + PORT)
})
