// route file to execute Prove 01 Assignment

// import fs for file system functionality
const fs = require('fs');

const proveHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head>');
		res.write('<title>Prove 01 Assignment</title>');
		res.write('</head>');
		res.write('<body><main><h1>Prove 01 Assignemnt</h1>');
		res.write('<h2>Create New User</h2>');
		res.write('<form action="/create-user" method="POST">');
		res.write('<label for="username">Enter User Name</label>');
		res.write('<input type="text name="username" id="username>');
		res.write('<button type="submit">Create New User</button>');
		res.write('</form>');
		res.write('</main>');
		res.write('</body>');
		res.write('</html>');
		// quit function
		return res.end();
	}
	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>User List Page</title></head>');
		res.write('<body><h1>User List</h1></body>');
		res.write('<ul>');
		res.write('<li>username</li>');
		res.write('</ul>');
		res.write('</html>');
		return res.end(); // end the response to send back to client
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody.split('=')[1]);
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();
	}
};
// global object through module.exports
module.exports = proveHandler;
