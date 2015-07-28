var express = require('express');
var router = express.Router();

/* GET home page. */
/* JADE SYNTEX */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS BS Website' });
});
*/
app.get('/', function(req, res){
  res.render('index.html');
});

module.exports = router;
