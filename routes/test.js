var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
	console.log('Rendering test ...');
	res.render('test', { title: 'TEST' });
});

app.all('/secret3', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});


module.exports = router;
