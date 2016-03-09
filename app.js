var express = require('express');

var app = express();

var port = 8080;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('hello');
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Listen port: %d', port);
    }
});
