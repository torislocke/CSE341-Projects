// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

// the below sets up the way to handle incoming requests
const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');
const prove01Routes = require('./routes/prove01');

//define middleware function & pass function as argument
// app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser({ extended: false })); // For parsing the body of a POST
app.use('/ta01', ta01Routes);
app.use('/ta02', ta02Routes);
app.use('/ta03', ta03Routes);
app.use('/ta04', ta04Routes);
app.use('/prove01', prove01Routes);
app.get('/', (req, res, next) => {
	// This is the primary index, always handled last.
	res.render('pages/index', { title: 'Welcome to my CSE341 Projects Repo', path: '/' });
});
app.use((req, res, next) => {
	// 404 page
	res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
