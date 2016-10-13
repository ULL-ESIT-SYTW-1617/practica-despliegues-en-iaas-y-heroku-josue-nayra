var express = require('express');
var path = require('path');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'gh-pages')));


app.set('port', (process.env.PORT || 5050));

app.get('/', function(request, response){
  response.sendFile('index');
});


app.listen(app.get('port'), function(){
  console.log('Puerto utilizado: '+app.get('port'));
})

module.exports = app;
