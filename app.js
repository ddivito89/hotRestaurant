var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express()
var PORT = 3000;

var openbTables = []
var waitList = []

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/api/all", function(req, res) {
  res.send("some data")
})


app.post("/reserve", function(req, res) {
  console.log(req.body)
  res.send("res received")
})


app.listen(PORT, function() {
  console.log("app listening on port " + PORT)
})
