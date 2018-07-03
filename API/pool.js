var mysql = require ('../server/node_modules/mysql');

function createPool (host, user, password, database) {
    var connection = mysql.createPool ({
        connectionLimit: 5,
        host: host,
        user: user,
        password: password,
        database: database,
    });
    return connection;
}
exports.createPool = createPool;

function statusConnection (connection) {
    
}

