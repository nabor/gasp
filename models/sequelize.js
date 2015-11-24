var Sequelize = require('sequelize');

var db = new Sequelize('gasp', 'username', 'password', {
	dialect: 'sqlite',
	storage: 'db/gasp.sqlite'
});