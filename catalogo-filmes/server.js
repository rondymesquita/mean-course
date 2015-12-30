//var express 		= require("express");
var http 			= require('http');
var app 			= require('./config/express')();
var database 		= require('./config/database');
var fileSystem		= require('fs');

module.export = exports = module.exports = app;

var config = JSON.parse(fileSystem.readFileSync('./config/config.json', 'utf8'));
console.log(config);
database(config.database.url);

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('==> Server started at '+ server.address().port);
});
