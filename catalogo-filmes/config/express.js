var express             = require('express');
var bodyParser     	    = require('body-parser');
var methodOverride 	    = require('method-override');
var path 			    = require('path');

var routes			   = require('../app/routes/routes')

module.exports = function(){
    var app = express();
    app.set('port', process.env.PORT || 3000);

    //middlewares
    // get all data/stuff of the body (POST) parameters
    // parse application/json
    app.use(bodyParser.json());
    // parse application/vnd.api+json as json
    //app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
    app.use(methodOverride('X-HTTP-Method-Override'));
    // set the static files location /public/img will be /img for users
    app.use(express.static(path.join(__dirname,'../public')));

    app.engine('html', require('ejs').renderFile);
    app.set('view engine','ejs');
    app.set('views', path.join(__dirname,'../app/views'));

    //alwarys before configurate body parser
    routes(app);
    app.use('/', function(req, res, next){
    	//console.log('===> interceptor 1');
    	next();
    });

    return app;
}
