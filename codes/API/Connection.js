const mysql = require('../server/node_modules/mysql');

module.exports = Connection;

function Connection(host, user, password, database) {
	let __connection = mysql.createConnection({
		host: host,
		user: user,
		password: password,
		database: database
	});
	let __database = database;
	let __status = false;

	//public get methods
	this.getConnection = () => {
		return __connection;
	}
	this.getDatabase = () => {
		return __database;
	}
	this.getStatus = () => {
		return __status;
	}

	//public set methods
	this.setStatus = (status) => {
		__status = status;
	}
}

Connection.prototype.openConnection = () => {
	this.getConnection().connect((error) => {
		if (error) {
			this.setStatus(false);
			throw error;
		}
		else {
			console.log('Connected to "' + this.getDatabase() + '".');
			this.setStatus(true);
		}

	});
}

Connection.prototype.closeConnection = () => {
	this.getConnection().end((error) => {
		if (error) {
			this.setStatus(true);
			throw error;
		}
		else {
			console.log('Disconnected from "' + this.getDatabase() + '".');
			this.setStatus(false);
		}
	});
}

Connection.prototype.showStatus = () => {
	if (this.getStatus() == false) {
		console.log('false');
	}
	else if (this.getStatus() == true) {
		console.log('true');
	}
} 