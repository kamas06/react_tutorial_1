var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use('/', express.static(__dirname));

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });
