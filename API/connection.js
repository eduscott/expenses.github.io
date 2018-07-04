var mysql = require ('../server/node_modules/mysql');

function createConnection (host, user, password, database) {
	return mysql.createConnection ({
		host: host,
		user: user,
		password: password,
		database: database
	});
}

function openConnection (connection) {
	connection.connect (function (error) {
		if (error) throw error;
		console.log('Connected to database!');
	});
}

function closeConnection (connection) {
	connection.end(function (error) {
		if (error) throw error;
		console.log('Disconnect to database!')
	});
}

function getConnection () {

}

function statusConnection (connection) {
    
}