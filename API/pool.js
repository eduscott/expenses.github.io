var mysql = require ('../server/node_modules/mysql');

function createPool (host, user, password, database) {
    var pool = mysql.createPool ({
        connectionLimit: 5,
        host: host,
        user: user,
        password: password,
        database: database
    });
    return pool;
}
exports.createPool = createPool;

