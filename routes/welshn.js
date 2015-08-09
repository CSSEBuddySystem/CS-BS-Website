var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Routing to "/welshn/"');
	res.render('welshn/index', { title: 'CS BS Website' });
});

router.get('/test', function(req, res, next) {
	console.log('Routing to "/welshn/test"');
	res.render('welshn/test', { title: 'TEST' });
});

module.exports = router;
