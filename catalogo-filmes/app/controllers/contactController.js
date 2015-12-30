var fileSystem = require('fs');
var Contact     = require('../models/contact').init();

var contacts = [
    {
        _id: guid(),
        name: 'Tony Stark',
        email: 'iamironman@email.com'
    },
    {
        _id: guid(),
        name: 'Steve Rogers',
        email: 'captainamerica@email.com'
    },
    {
        _id: guid(),
        name: 'Natasha Romanoff',
        email: 'blackwidow@email.com'
    }
];

module.exports.list = function(req, res){
    var promise = Contact.find().exec();
    promise.then(function(data){
        res.json(data);
    },function(error){
        res.status(500).json(error);
    });
};

module.exports.save = function(req, res){
    var contact = req.body;
    Contact.create(contact).then(function(data){
        res.status(201).json(data);
    },function(error){
        res.status(500).json(error);
    });
}

module.exports.getById = function(req, res){

}

module.exports.delete = function(req, res){

}


// module.exports.list = function(req, res){
//     res.json(contacts);
// };
//
// module.exports.save = function(req, res){
//     var contact = req.body;
//     contact['_id'] = guid();
//     contacts.push(contact);
//     console.log(contacts);
//     res.sendStatus(200).end();
// };
//
// module.exports.getById = function(req, res){
//     var id = req.params.id;
//     console.log('Id: '+id);
//
//     var contact = contacts.filter(function(contact){
//         return contact._id == id;
//     })[0];
//
//     contact ? res.json(contact) : res.status(404).send('Contato não encontrado');
// };
//
// module.exports.delete = function(req, res){
//     var id = req.params.id;
//     console.log('removendo: '+id);
//
//     contacts = contacts.filter(function(contact){
//         return contact._id != id;
//     });
//
//     res.sendStatus(204).end();
// };
//

function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

var writeToFile = function(){
    var seen = [];

    var text = JSON.stringify(req, function(key, val) {
       if (val != null && typeof val == "object") {
            if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    });

    fileSystem.writeFile('./log.json', text, function(err){
        if(err)
            return console.log("==> error");

        console.log('==> saved');
    });
}
