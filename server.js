//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/Web Dev', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Web Dev.html'));
});
app.get('/app', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});app.get('/asm', function(req, res){
  res.sendFile(path.join(__dirname, 'views/asm.html'));
});app.get('/asm2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/asm2.html'));
});app.get('/sm2', function(req, res){
res.sendFile(path.join(__dirname, 'views/sm2.html')); 
});app.get('/sm3', function(req, res){
 res.sendFile(path.join(__dirname, 'views/sm3.html')); 
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});