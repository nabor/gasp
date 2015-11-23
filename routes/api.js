var express = require('express');
var router = express.Router();

var Entry = require('./api/entry');

/* GET api home. */
router.get('/', function(req, res, next) {
	res.json({ title: 'Gasp!' });
});

router.get('/entries', Entry.list);
router.post('/entry', Entry.create);


module.exports = router;
