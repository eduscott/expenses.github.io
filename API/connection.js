var mysql = require ('../server/node_modules/mysql');

var Connection = function (host, user, password, database) {
	this.host = host;
	this.user = user;
	this.password = password;
	this.database = database;
	this.connection = undefined;
}

Connection.prototype.getHost = function () {
	return this.host;
}
Connection.prototype.getUser = function () {
	return this.user;
}
Connection.prototype.getPassword = function () {
	return this.password;
}
Connection.prototype.getDatabase = function () {
	return this.database;
}
Connection.prototype.getConnection = function () {
	return this.connection;
}

Connection.prototype.createConnection = function () {
	this.connection = mysql.createConnection ({
		host: this.getHost(),
		user: this.getUser(),
		password: this.getPassword(),
		database: this.getDatabase()
	});
}

Connection.prototype.openConnection = function () {
	var that = this;
	if (this.status() == false) {
		this.getConnection().connect (function (error) {
			if (error) throw error;
			console.log ('Connected to the database: ' + that.getDatabase() + ' by user: ' + that.getUser() + '.');
		});
	} else {
		console.log('Active connections with database: ' + that.getDatabase() + ' already exist.');
	}
}

Connection.prototype.closeConnection = function () {
	var that = this;
	if (this.status() == true) {
		this.getConnection().end (function (error) {
			if (error) throw error;
			console.log('Disconnected from the database: ' + that.getDatabase() + '.');
		});
	} else {
		console.log ('There are no active connections to the database: ' + that.getDatabase() + '.');
	}
}

Connection.prototype.status = function () {
}

var connection = new Connection ('localhost', 'test', 'T3$tt$3T', 'test');