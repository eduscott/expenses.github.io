var mysql = require ('../server/node_modules/mysql');

module.exports = Connection;

var Connection = function (host, user, password, database) {
	var host = host;
	var user = user;
	var password = password;
	var database = database;
	var connection = mysql.createConnection ({
		host: host,
		user: user,
		password: password,
		database: database
	});
	var status = false;

	//public get methods
	this.getDatabase = function () {
		return database;
	}
	this.getConnection = function () {
		return connection;
	}
	this.getStatus = function () {
		return status;
	}

	//public set methods
	this.setStatus = function (status) {
		status = status;
	}
}

Connection.prototype.openConnection = function () {
	var that = this;
	this.getConnection().connect (function (error) {
		if (error) {
			console.log ('Error: "' + error + '".');
			that.setStatus(false);
		} else {
			console.log ('Connected to "' + that.getDatabase() + '".');
			that.setStatus(true);
		}
	});
}

Connection.prototype.closeConnection = function () {
	var that = this;
	this.getConnection().end (function (error) {
		if (error) {
			console.log ('Error: "' + error + '".');
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

//var connection = new Connection ('localhost', 'test', 'T3$tt$3T', 'test');
//connection.openConnection();
//connection.closeConnection();