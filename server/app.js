
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

var cors = require('cors');
app.use(cors());

// all environments
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/friends', user.friends);
app.get('/phones', user.phones);
app.get('/us500', user.us500);
app.get('/phones/:phoneId.json', user.phone);

var todos = require('./routes/todos');

app.get('/todos/:name', todos.read);
app.post('/todos/:name', todos.create);
app.put('/todos/:name/:id', todos.update);
app.del('/todos/:name/:id', todos.remove);
app.del('/todos/all', todos.removeAll);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
