var Entry = {}

Entry.list = function(req, res, next) {
	res.json({ 'entries': [
		{
			'title': 'Title',
			'content': '<p>content</p>'
		}
	]});
};

Entry.create = function(req, res, next) {
	res.json({
		'created': false
	});
};

module.exports = Entry;