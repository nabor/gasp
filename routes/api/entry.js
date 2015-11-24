function Entry() {}

Entry.list = function(req, res, next) {
	res.json({ 'entries': [
		{
			'title': 'Title',
			'content': '<p>content</p>'
		}
	]});
};

Entry.create = function(req, res, next) {
	if (req.body.hasOwnProperty('title') && req.body.hasOwnProperty('content')) {
		res.json({
			'title': req.body.title,
			'content': req.body.content
		});
	} else {
		res.json({
			'error': 'Unexpected post data'
		});
	}
	
};

module.exports = Entry;