var mysql = require ('../server/node_modules/mysql');

module.exports = Connection;

var Connection = function (host, user, password, database) {
	let __host = host;
	let __user = user;
	let __password = password;
	let __database = database;
	let __connection = mysql.createConnection ({
		host: host,
		user: user,
		password: password,
		database: database
	});
	let __status = false;

	//public get methods
	this.getDatabase = function () {
		return __database;
	}
	this.getConnection = function () {
		return __connection;
	}
	this.getStatus = function () {
		return __status;
	}

	//public set methods
	this.setStatus = function (status) {
		__status = status;
	}
}

Connection.prototype.openConnection = function () {
	let that = this;
	this.getConnection().connect (function (error) {
		if (error) {
			throw error;
			console.log ('"' + error + '".');
			that.setStatus(false);
		} else {
			console.log ('Connected to "' + that.getDatabase() + '".');
			that.setStatus(true);
		}
	});
}

Connection.prototype.closeConnection = function () {
	let that = this;
	this.getConnection().end (function (error) {
		if (error) {
			throw error;
			console.log ('"' + error + '".');
			that.setStatus(true);
		} else {
			console.log('Disconnected from "' + that.getDatabase() + '".');
			that.setStatus(false);
		}
	});
}

Connection.prototype.showStatus = function () {
	if (this.getStatus() == false) {
		console.log('false');
	} else if (this.getStatus() == true) {
		console.log('true');
	}
}

var connection = new Connection ('localhost', 'test', 'T3$tt$3T', 'test');
connection.openConnection();
connection.closeConnection();