var express = require('express');

var bookRouter = express.Router();

var sql = require('mssql');

bookRouter.route('/')
            .get(function(req, res){
                var request = new sql.Request();
                request.query('select * from books', function(err, recordset){
                    console.log(recordset);
                });
                res.render('./views/books', {
                    books: [
                        {
                            title: "one",
                            description: "one description"
                        },
                        {
                            title: "two",
                            description: "two description"
                        }
                    ]
                });
            });

bookRouter.route('/:id')
            .get(function(req, res){
                res.render('index');
            });

module.exports = bookRouter;
