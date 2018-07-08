var mysql = require ('../server/node_modules/mysql');
var dicionary = require ('./dictionary');

module.exports = Pool;

var Pool = function (host, user, password, database) {
	var host = host;
	var user = user;
	var password = password;
	var database = database;
	var connection = mysql.createPool ({
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

Pool.prototype.usePool = function (sql) {
    var that = this;
    if (this.statusPool() == true) {
        pool.getConnection (function (error, connection){
            if (error) throw error;
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    console.log('Error: "' + error + '".');
                } else {
                    return dicionary.createDicionary (fields, results);
                }
                connection.release();
            }); 
        });
    } else {
        console.log('Error: "' + error + '".');
    } 
}

Pool.prototype.closePool = function () {
    var that = this;
    if (this.statusPool() == true) {
        pool.end (function (error) {
            if (error) {
                that.setStatus (true);
                console.log('Error: "' + error + '".');
            } else {
                that.setStatus (false);
                console.log('Pool connections were closed.');
            }  
        });
    } else {
        console.log('Error: "' + error + '".');
    }
}

Pool.prototype.statusPool = function () {
    var that = this;
    pool.getConnection (function (error, connection) {
        if (error) {
            that.setStatus (false);
            return false;
        } else {
            that.setStatus (true);
            return true;
        }
    });
}