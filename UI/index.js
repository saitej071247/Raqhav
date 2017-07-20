const express = require('express');
const app = express();
var path = require('path');
//const subscriber = require('./subscription');
app.use(express.static(__dirname + '/ui'));
app.listen(3000, function () {
   //  subscriber.start();
    console.log('Example app listening on port 3000!')
});