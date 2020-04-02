const http = require('http');

function localGetRequest(path, port) {

	const options = {
		hostname : '127.0.0.1',
		path : path,
		port : port,
		method : 'GET',
	}

	const req = http.request(options, (res) => {
		res.setEncoding('utf8');

		res.on('data', (chunk) => {
			console.log(chunk);
		});

		res.on('end', () => {
			console.log('No more data in request');
		});
	});

	req.end();
}

localGetRequest('/bigboi', 3000);
localGetRequest('/biggirl', 3001);
