//var express 		= require("express");
var http 			= require('http');
var app 			= require('./config/express')();
//var app = express();


// app.engine('html', require('ejs').renderFile);
// app.set('view engine','ejs');
// app.set('views', path.join(__dirname,'/app/views'));
//
// // get all data/stuff of the body (POST) parameters
// // parse application/json
// app.use(bodyParser.json());
// // parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(methodOverride('X-HTTP-Method-Override'));
// // set the static files location /public/img will be /img for users
// app.use(express.static(__dirname + '/public'));
//
// routes(app);
//
// app.set('port', process.env.PORT || 3000);
//
// var server = app.listen(app.get('port'), function(){
// 	//console.log(server);
// 	console.log('Server started at '+ server.address().port);
// });
//



module.export = exports = module.exports = app;

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('==> Server started at '+ server.address().port);
});
