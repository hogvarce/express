var express = require('express');

var adminRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var books= [
    {
        title: "one",
        description: "one description"
    },
    {
        title: "two",
        description: "two description"
    }
];

adminRouter.route('/addbooks')
            .get(function(req, res){
                var url = 'mongodb://localhost:27017/test';
                mongodb.connect(url, function(err, db){
                    if ( err ) {
                        throw err;
                    } else {
                        console.log("successfully connected to the database");
                    }
                     db.close();
                });
                //res.send('interesting book');
            });
module.exports = adminRouter;
