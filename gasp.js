var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var api = require('./routes/api');
var error = require('./routes/error');

var debug = require('debug')('gasp:server');
var http = require('http');


function normalizePort(val) {
	var port = parseInt(val, 10);
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	if (port >= 0) {
		// port number
		return port;
	}
	return false;
}

function Gasp() {
	this.app = express();
	this.app.set('views', path.join(__dirname, 'views'));
	this.app.set('view engine', 'jade');
	// uncomment after placing your favicon in /static
	//this.app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
	this.app.use(logger('dev'));
	this.app.use(bodyParser.json());
	this.app.use(bodyParser.urlencoded({ extended: false }));
	this.app.use(cookieParser());
	this.app.use(express.static(path.join(__dirname, 'static')));

	// Routes
	this.app.use('/', routes);
	this.app.use('/api', api);

	this.port = normalizePort(process.env.PORT || '3000');
	this.app.set('port', this.port);

	this.server = http.createServer(this.app);

	// catch 404 and forward to error handler
	this.app.use(error.notFound);
	if (this.app.get('env') === 'development') {
		this.app.use(error.debugHandler);
	}

	// production error handler
	// no stacktraces leaked to user
	this.app.use(error.handler);
}

Gasp.prototype.run = function() {
	this.server.listen(this.port);
}

module.exports = Gasp;
