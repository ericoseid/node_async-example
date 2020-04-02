const express = require('express')
const app = express()
const port = 3001

app.get('/biggirl', function(req, res) {
	const now = new Date();

	while ((new Date()).getSeconds() - now.getSeconds() < 5) {
	}

	res.send('This is a BIG GIRL');
});

app.listen(port);
