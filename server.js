//Name: Soroush Bahrami    Student ID: 152499182
var express = require("express");
const path = require("path");
var app = express();
let dataservice = require('./data-service');

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

console.log("meal data: ", dataservice.getAll());

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/index.html"));
});

// setup another route to listen on /about
app.get("/top-package", function(req,res){
  res.sendFile(path.join(__dirname,"/views/top-package.html"));
});

app.get("/registration", function(req,res){
  res.sendFile(path.join(__dirname,"/views/registration.html"));
});

app.get("/login", function(req,res){
  res.sendFile(path.join(__dirname,"/views/login.html"));
});

app.post("/registration", (req,res) =>{
  dataservice.register(req.body);
res.send({"message ":  req.body.nameInput + " was registered"});
})

app.use(express.static('public'))
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
