var mysql = require ('../server/node_modules/mysql');

export default class Connection {

	constructor (host, user, password, database) {
		this.__host = host;
		this.__user = user;
		this.__password = password;
		this.__database = database;
		this.__connection = mysql.createConnection({
			host: host,
			user: user,
			password: password,
			database: database
		});
		this.__status = false;
	}

	//public get methods
	get database () {
		return this.__database;
	}
	get connection () {
		return this.__connection;
	}
	get status () {
		return this.__status;
	}

	//public set methods
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

let connection = new Connection ('localhost', 'test', 'T3$tt$3T', 'test');
connection.openConnection();
connection.closeConnection();