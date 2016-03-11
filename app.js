var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

var bookRouter = require('./public/routes/booksRoutes');

app.use(express.static('public'));
app.set('views', './public');
app.set('view engine', 'jade');


app.get('/', function(req, res){
    res.render('./views');
});

app.use('/books', bookRouter);

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Listen port: %d', port);
    }
});
