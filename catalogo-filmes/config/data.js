var mongo           = require('mongodb').MongoClient;
var ObjectID        = require('mongodb').ObjectID;

var _id = new ObjectID("53ee689e89bd201218944bba");

// MongoClient.connect('mongodb://localhost:27017/contact',function(err, db){
//     if(err)
//         throw err;
//
//     var contactList = db.collection('contact').find();
//     contactList.forEach(function(value, index, array){
//         console.log(value);
//     });
// });

// module.export.list = function(uri){
//     mongo.connect()
// }
