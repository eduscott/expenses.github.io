var mysql = require ('../server/node_modules/mysql');

var Connection = function (host, user, password, database) {
	this.host = host;
	this.user = user;
	this.password = password;
	this.database = database;
}

Connection.prototype.createConnection = function () {
	this.connection = mysql.createConnection ({
		host: this.host,
		user: this.user,
		password: this.password,
		database: this.database
	});
}

Connection.prototype.openConnection = function () {
	this.createConnection ();
	this.connection.connect (function (error) {
		if (error) throw error;
		console.log ('Connected to database: ' + this.database + ' by user: ' + this.user + '.');
	});
}

Connection.prototype.closeConnection = function () {
	this.connection.end (function (error) {
		if (error) throw error;
		console.log('Disconnect to database: ' + this.database + '.')
	});
}

Connection.prototype.status = function () {

}

var connection = new Connection ('localhost', 'test', 'T3$tt$3T', 'test');
console.log(connection.user);