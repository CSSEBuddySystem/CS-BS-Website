var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Routing to "/brennen/"');
	res.render('brennen/index', { title: 'CS BS Website' });
});

router.get('/test', function(req, res, next) {
	console.log('Routing to "/brennen/test"');
	res.render('brennen/test', { title: 'TEST' });
});

module.exports = router;
