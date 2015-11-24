function Error() {}

Error.notFound = function(req, res, next) {
	console.log('not found');
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
};

Error.debugHandler = function(err, req, res, next) {
	console.log('debug');
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
};

Error.handler = function(err, req, res, next) {
	console.log('debug');
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	});
};

module.exports = Error;