// Simple Express web server
// @see http://howtonode.org/getting-started-with-express
// Load the express module
var express = require('express');
var app = express();
// Respond to requests for / with 'Hello World'
app.get('/', function(req, res){
res.send('Hello world, is me!');
});
// Listen on port 80
app.listen(8080, () => console.log('Express server started successfully.'));