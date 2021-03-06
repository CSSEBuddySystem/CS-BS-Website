var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Routing to "/"');
	res.render('index', { title: 'CS BS Website' });
});

router.get('/test', function(req, res, next) {
	console.log('Rendering "/test"');
	res.render('test', { title: 'TEST' });
});

module.exports = router;
