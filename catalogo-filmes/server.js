var express 		= require("express");
var path 			= require('path');
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var controller 		= require('./app/controllers/index');
var routes			= require('./app/routes/routes.js')
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/app/views'));

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

routes(app, controller);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	//console.log(server);
	console.log('Server started at '+ server.address().port);
});

//console.log("==> " +routes);

//exports = module.exports = app;
