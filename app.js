var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.set('views', './public');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Listen port: %d', port);
    }
});
