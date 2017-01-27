var express = require('express');
var app = express();

// Add CORS headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

require('./routes')(app);
require('./extra-routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');
