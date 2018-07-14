var mysql = require ('../server/node_modules/mysql');

class Connection {

	constructor (host, user, password, database) {
		this.connection = mysql.createConnection({
			host: host,
			user: user,
			password: password,
			database: database
		});
		this.database = database;
		this.status = false;
	}

	//public get methods
	get connection () {
		return this.__connection;
	}
	get database () {
		return this.__database;
	}
	get status () {
		return this.__status;
	}

	//public set methods
	set connection (connection) {
		this.__connection = connection;
	}
	set database (database) {
		this.__database = database;
	}
	set status (status) {
		this.__status = status;
	}

	//others methods
	openConnection () {
		let that = this;
		this.connection.connect (function (error) {
			if (error) {
				that.status = false;
				throw error;
			}
			else {
				console.log ('Connected to "' + that.database + '".');
				that.status = true;
			}
		});
	}

	closeConnection () {
		let that = this;
		this.connection.end (function (error) {
			if (error) {
				that.status = true;
				throw error;
			}
			else {
				console.log ('Disconnected from "' + that.database + '".');
				that.status = false;
			}
		});
	}

	showStatus () {
		if (this.status == false) {
			console.log ('false');
		}
		else if (this.status == true) {
			console.log ('true');
		}
	}
}