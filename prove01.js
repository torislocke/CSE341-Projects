// // core modules of Node.js (http, https, fs, path, os)
// const http = require('http');

// // import prove-routes file for methods
// const routes = require('./prove01-routes');

// // use http createServer to create server and execute function in routes
// const server = http.createServer(routes);

// // select the port to review code or host location
// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:5000

// the below sets up the way to handle incoming requests
const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');
const prove01Routes = require('./routes/prove01');

//define middleware function & pass function as argument
app.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')

	.use(bodyParser({ extended: false })) // For parsing the body of a POST
	.use('/ta01', ta01Routes)
	.use('/ta02', ta02Routes)
	.use('/ta03', ta03Routes)
	.use('/ta04', ta04Routes)
	.use('/prove01', prove01Routes)
	.get('/', (req, res, next) => {
		// This is the primary index, always handled last.
		res.render('pages/index', { title: 'Welcome to my CSE341 Projects Repo', path: '/' });
	})
	.use((req, res, next) => {
		// 404 page
		res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));

