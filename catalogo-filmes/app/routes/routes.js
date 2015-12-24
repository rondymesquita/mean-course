var indexController = require('../controllers/indexController');
var taskController = require('../controllers/taskController');
module.exports = function(app){

    //indexController
    app.get('/', indexController.index);
    app.get('/about', indexController.about);

    //taskController
    
};
