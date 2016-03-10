var express = require('express');

var bookRouter = express.Router();

bookRouter.route('/')
            .get(function(req, res){
                res.render('index', {
                    view: 'views/books',
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
