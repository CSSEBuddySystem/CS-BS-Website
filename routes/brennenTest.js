var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/inDev/Brennen/Test', function(req, res) {
	res.render('/inDev/Brennen/Test', { title: 'Brennen Test' });
});