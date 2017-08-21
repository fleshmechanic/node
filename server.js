var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(req, res) {
    res.send('Hello WORLD! This is my 1st test of a Node.js App!!!');
});

app.listen(port, function(){
    console.log("Listening at port: " + port);
})
