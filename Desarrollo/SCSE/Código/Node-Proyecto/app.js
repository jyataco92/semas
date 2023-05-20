var fs = require('fs');
var express = require('express');
var session = require('express-session');
var bodyParser = require("body-parser");
var path = require("path"); 
var engines = require('consolidate');
var mustache = require('mustache');
//var ip = require('ip');
var multer  = require('multer');

var AutenticarModel = require("./models/autenticar");
var app = express();
var port = process.env.PORT || 8080;
var host = process.env.IP || '0.0.0.0';
var srcpath = path.join(__dirname,'/views');

app.use(express.static('views'));
app.use(session({secret:'XASDASDA', resave: true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', engines.mustache);
app.set("view engine", "html");

app.get("/",function(req,res){ 
	AutenticarModel.Autenticar(req, res, srcpath, '/SCSE-Login.html');		
});
app.post("/ingresarSistemaUsuario",function(req,res){ 	
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    AutenticarModel.IngresarSistemaUsuario(req.body, res);   
});
app.post("/registrarSistemaUsuario",function(req,res){ 	
    req.session.name = req.body.username;
    req.session.lastname = req.body.password;
    req.session.mail = req.body.mail;
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    AutenticarModel.RegistrarUsuario(req.body, res);   
});

app.listen(port, host ,function(){   
    console.log("server start on port "+ port);  
});