const http = require('http');

const options = {
	hostname : '127.0.0.1',
	port : 3000,
	path : '/bigboi',
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

const options1 = {
	hostname : '127.0.0.1',
	port : 3001,
	path : '/biggirl',
	method : 'GET',
}

const req1 = http.request(options1, (res) => {
	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		console.log(chunk);
	});

	res.on('end', () => {
		console.log('No more data in request');
	});
});

req1.end();
