const express = require('express')
const app = express()
const port = 3000

app.get('/bigboi', function(req, res) {
	const now = new Date();

	while ((new Date()).getSeconds() - now.getSeconds() < 5) {
	}

	res.send('This is a BIG BOI');
});

app.listen(port);

