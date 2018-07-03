var connectionAPI = require ('./connection');

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

function deleteData (connection, table, data) {
    pool.getConnection (function (error, connection) {
        var sql = 'DELETE FROM ' + table + ' WHERE ' + Object.keys(data)[0] + ' = "' + Object.values(data)[0] + '"';
        connection.query (sql, function (error) {
            connection.release ();
            console.log('Data was deleted!');
            if (error) throw error;   
        })
    });
}
exports.deleteData = deleteData;

var pool = connectionAPI.createPool ('localhost', 'test', 'T3$tt$3T', 'test');
insertData (pool, 'test', {'name':'Marcos', 'age':17});
deleteData (pool, 'test', {'name':'Marcos'});
