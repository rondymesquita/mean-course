module.exports.index = function(req, res){
	res.render('index',{name:'Express'});
};
module.exports.list = function(req, res){
	res.json({
		titulo: 'Star Wars Ep I',
		diretor: 'George Lucas'
	});
};
module.exports.save = function(req, res){
	var filme = req.body;
	console.log('chegou: '+filme);
	res.send(filme);
};
