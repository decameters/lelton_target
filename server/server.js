var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// require routes here

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

// app.use / here 

app.listen(port, function(){
    console.log('listening on port', port);  
});