
/**
 * Module dependencies.
 */

var express = require('express');
var app = express.createServer();
var jade = require('jade');

//var app = module.exports = express.createServer();
app.register('.html', require('jade'));
// Configuration

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function (req, res) {
   res.render('index.jade', { title: 'Express' })
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
