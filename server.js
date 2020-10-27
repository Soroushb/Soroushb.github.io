//Name: Soroush Bahrami    Student ID: 152499182
var express = require("express");
const path = require("path");
var app = express();
let dataservice = require('./data-service');
var nodemailer = require('nodemailer');

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}



//console.log("meal data: ", dataservice.getOne(1));



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

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sepfabi44@gmail.com',
    pass: 'Sepehr12'
  }
});

app.post("/registrationSubmit", (req,res) =>{
  var bool = true;
if(!dataservice.validateNull(req.body.FirstName)){
  res.send({"message": "You must have a first name"})
bool = false
}
if(!dataservice.validateNull(req.body.LastName)){
  res.send({"message": "You must have a last name"})
bool = false
}
if(!dataservice.validateNull(req.body.emailAddress)){
  res.send({"message": "You must have a email address"})
bool = false
}
if(!dataservice.validateNull(req.body.passwordInput)){
  res.send({"message": "You must have a password"})
bool = false
}
if(!dataservice.validatePassword(req.body.passwordInput)){
 res.send({"message": "invalid password"})
 bool = false;
}
if(bool == true){
  dataservice.register(req.body);
  res.send({"message ":  req.body.FirstName + " " + req.body.LastName + " was registered"});
  
var mailOptions = {
  from: 'sepfabi44@gmail.com',
  to: req.body.emailAddress,
  subject: 'Welcome '+ req.body.FirstName,
  text: 'Hello ' + req.body.FirstName + ' ' + req.body.LastName + '! You are registered.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

}
});

app.post('/login', (req,res) => {
  if(dataservice.findEmailAddress(req.body.emailAddress) && dataservice.findpassword(req.body.passwordInput)){
  res.send({"message": req.body})
  }else{
    res.send({"message": "not found"})
  }
})




app.use(express.static('public'))
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
