var express = require('express');
var router = express.Router();

/* GET api home. */
router.get('/', function(req, res, next) {
  res.end('index', { title: 'Gasp!' });
});

module.exports = router;
