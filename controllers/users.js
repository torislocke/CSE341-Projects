const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
	res.render('create-user', {
		pageTitle: 'Add User | Prove 01 Assignment',
		path: '/prove01/create-user',
		formsCSS: true,
		productCSS: true,
		activeAddUser: true,
	});
};
exports.postAddUser = (req, res, next) => {
	const user = new User(req.body.username);
	user.save();
	res.redirect('/');
};

exports.getUsers = (req, res, next) => {
	User.fetchAll((users) => {
		res.render('/pages/users', {
			use: users,
			pageTitle: 'User List',
			path: '/',
			hasUsers: users.length > 0,
			activeUser: true,
			userCSS: true,
		});
	});
};
