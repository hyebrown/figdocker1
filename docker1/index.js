

var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.type('text/plain');
	res.send('hello world');
});


app.listen(8000);
