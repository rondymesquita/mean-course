//var express 		= require("express");
var http 			= require('http');
var app 			= require('./config/express')();
var database 		= require('./config/database');
var fileSystem		= require('fs');

module.export = exports = module.exports = app;

//var obj = JSON.parse(fs.readFileSync('file', 'utf8'));
database('mongodb://localhost/contact');

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('==> Server started at '+ server.address().port);
});
