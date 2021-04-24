const path = require('path');

const express = require('express');

// const usersController = require('../controllers/users');

const router = express.Router();

// router.get('/create-user', usersController.getAddUser);
// router.post('/create-user', usersController.postAddUser);
// router.get('/', usersController.getUsers);

router.get('/', (req, res, next) => {
	res.render('pages/create-user', {
		path: '/create-user', //  EJS
		title: 'Prove Assignment One',
		subTitle: 'Registration Form',
	});
});

router.get('/users', (req, res, next) => {
	res.render('pages/prove1out', {
		path: '/users', //  EJS
		title: 'Prove Assignment One - Output',
		subTitle: 'Output from Prove Assignment',
	});
});

module.exports = router;
