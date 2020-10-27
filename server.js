/********************************************************************************** 
 *  WEB322 –Assignment 02* 
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part * 
 *  of this assignment has been copied manually or electronically from any other source * 
 *  (including 3rd party web sites) or distributed to other students.* 
 * *  Name: _Soroush Bahrami__ Student ID: __152499182__ Date: __23/10/2020__** 
 *  Online (Heroku, https://...) Link: ___________________________________________________** 
 *  GitHub or Bitbucket repo Link: ___________________________________________________*
 * ********************************************************************************/
var express = require("express");
const path = require("path");
var app = express();
let dataservice = require('./data-service');
var nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');



var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

//console.log("meal data: ", dataservice.getOne(1));

app.get("/", function(req,res){
    
  var someData = dataservice.getAll;

  res.render('index', {
      data: someData,
      layout: false 
  });
      
});

app.get("/top-package", function(req,res){
  var someData = dataservice.getAll;

  
  res.render('top-package', {
      data: someData,
      layout: false 
  });
});

app.get('/registration', (req,res) => {
  res.render('registration', {
    layout: false 
});
})


app.get('/login', (req,res) => {
  res.render('login', {
    layout: false 
});
})


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sepfabi44@gmail.com',
    pass: 'Sepehr12'
  }
});

app.post("/registrationSubmit", (req,res) =>{
  var bool = true;
  var registrationData = req.body;
if(!dataservice.validateNull(req.body.FirstName)){
  res.render('firstError', {
    data: registrationData,
    layout: false 
  });
bool = false
}
if(!dataservice.validateNull(req.body.LastName)){
  res.render('lastError', {
    data: registrationData,
    layout: false 
  });
bool = false
}
if(!dataservice.validateNull(req.body.emailAddress)){
  res.render('emailError', {
    data: registrationData,
    layout: false 
  });
bool = false
}
if(!dataservice.validateNull(req.body.passwordInput)){
  res.render('passNull', {
    data: registrationData,
    layout: false 
  });
bool = false
}
if(!dataservice.validatePassword(req.body.passwordInput)){
  res.render('passInvalid', {
    data: registrationData,
    layout: false 
  });
 bool = false;
}
if(bool == true){
  dataservice.register(req.body);

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


res.render('dashboard', {
  data: registrationData,
  layout: false 
});

}
});

app.post('/login', (req,res) => {
  var registrationData = req.body;
  if(dataservice.findEmailAddress(req.body.emailAddress) && dataservice.findpassword(req.body.passwordInput)){
    res.render('loginSuccess', {
      data: registrationData,
      layout: false 
    });
  }else{
    res.render('loginFail', {
      data: registrationData,
      layout: false 
    });
  }
})




app.use(express.static('public'))
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
