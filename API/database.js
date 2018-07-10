var mysql = require ('../server/node_modules/mysql');

module.exports = Database;

function insertData (pool, table, data) {
    pool.getConnection (function (error, connection) {
        if (error) throw error;
        var dataKeys = Object.keys (data);
        var dataValues = Object.values (data);
        var sql = 'INSERT INTO ' + table + ' (';
        for (var key in dataKeys) {
            sql += dataKeys[key];
            if (dataKeys[key] == dataKeys[dataKeys.length-1]){
                sql += ')';
            } else {
                sql += ',';
            }
        }
        sql += ' VALUES (';
        for (var value in dataValues) {
            sql += '"' + dataValues[value];
            if (dataValues[value] == dataValues[dataValues.length-1]){
                sql += '");';
            } else {
                sql += '",';
            }
        }
        console.log(sql)
        connection.query (sql, function (error) {
            console.log('Data was inserted!');
            connection.release ();
            if (error) throw error;
        });
    });
}
exports.insertData = insertData;

function deleteData (pool, table, key) {
    pool.getConnection (function (error, connection) {
        var sql = 'DELETE FROM ' + table + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
        connection.query (sql, function (error) {
            connection.release ();
            console.log('Data was deleted!');
            if (error) throw error;   
        })
    });
}
exports.deleteData = deleteData;

function updateData (pool, table, key, data) {
    
}

var pool = connectionAPI.createPool ('localhost', 'test', 'T3$tt$3T', 'test');
insertData (pool, 'test', {'name':'Marcos', 'age':17});
deleteData (pool, 'test', {'name':'Marcos'});
