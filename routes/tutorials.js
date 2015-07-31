var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Routing to "/tutorials/index"');
	res.render('tutorials/index', { title: 'CS BS Website' });
});

router.get('/nodejs-express-website', function(req, res, next) {
	console.log('Routing to "/tutorials/nodejs-express-website"');
	res.render('tutorials/nodejs-express-website', { title: 'TEST' });
});

module.exports = router;
