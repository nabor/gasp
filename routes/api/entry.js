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
	canPost = req.body.hasOwnProperty('id');
	canPost = canPost && req.body.hasOwnProperty('title');
	canPost = canPost && req.body.hasOwnProperty('content');
	if (canPost) {
		templateFile = path.join(
			req.app.locals.config.templates, 'post.jade'
		);
		console.log(templateFile);
		html = jade.renderFile(templateFile, {
			title: req.body.title,
			content: req.body.content
		});
		outFile = path.join(
			req.app.locals.config.output,
			req.body.id + '.html'
		);
		fs.writeFileSync(outFile, html);
		res.json({
			'id': req.body.id,
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