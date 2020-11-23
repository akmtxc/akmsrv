const express = require('express');
const app = express();

app.use(express.static(__dirname + '/index'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index/index.html');
})


app.listen(80, '127.0.0.1');
