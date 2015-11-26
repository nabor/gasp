var fs = require('fs')
var path = require('path');
var jade = require('jade');

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
		template_file = path.join(req.app.locals.config.templates, 'post.jade');
		console.log(template_file);
		html = jade.renderFile(template_file, {
			title: req.body.title,
			content: req.body.content
		});
		out_file = path.join(req.app.locals.config.output, 'last.html');
		fs.writeFileSync(out_file, html);
		res.json({
			'title': req.body.title,
			'content': req.body.content,
			'render': html
		});
	} else {
		res.json({
			'error': 'Unexpected post data'
		});
	}
	
};

module.exports = Entry;