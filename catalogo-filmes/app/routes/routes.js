var contactController  = require('../controllers/contactController');

module.exports = function(app){

    //contatos controller
    // app.get('/contatos',contactController.list);
    // app.get('/contatos/:id',contactController.getById);

    app.route('/api/contacts')
        .get(contactController.list)
        .post(contactController.save);

    app.route('/api/contacts/:id')
        .get(contactController.getById)
        .delete(contactController.delete);

};
