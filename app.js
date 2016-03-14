var express = require('express');

var app = express();

var sql = require('mssql');
var config = {
    user: 'root',
    password: 'root',
    server: 'localhost',
    database: 'express',
    options: {
        encrypt: true
    }
};

sql.connect(config, function(err){
    if ( err )
        console.log(err);
    else
        console.log('Conntecting to MySQL...');
});

var port = process.env.PORT || 8080;

var bookRouter = require('./public/routes/booksRoutes');
var adminRouter = require('./public/routes/adminRoutes');

app.use(express.static('public'));
app.set('views', './public');
app.set('view engine', 'jade');


app.get('/', function(req, res){
    res.render('./views');
});

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

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
