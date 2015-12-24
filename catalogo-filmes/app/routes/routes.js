module.exports = function(app, controller){
    app.get('/', controller.index);
    app.get('/list', controller.list);
    app.post('/save',controller.save);
};
