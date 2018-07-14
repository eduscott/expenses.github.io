var connection = require('./Connection.js');

module.exports = Database;

var Database = function (host, user, password, database, table) {
    let __connection = new connection (host, user, password, database).getConnection();
    let __table = table;

    //public get methods
    this.getConnection = function () {
        return __connection;
    }
    this.getTable = function () {
        return __table;
    }
}

Database.prototype.insertData = function (data) {

    if (!this.getConnection().openConnection()) {
        let dataKeys = Object.keys (data);
        let dataValues = Object.values (data);
        let sql = 'INSERT INTO ' + this.getTable() + ' (';
        for (let key in dataKeys) {
            sql += dataKeys[key];
            if (dataKeys[key] == dataKeys[dataKeys.length-1]){
                sql += ')';
            } else {
                sql += ',';
            }
        }
        sql += ' VALUES (';
        for (let value in dataValues) {
            sql += '"' + dataValues[value];
            if (dataValues[value] == dataValues[dataValues.length-1]){
                sql += '");';
            } else {
                sql += '",';
            }
        }
        console.log(sql);

        this.getConnection().query (sql, function (error) {
            if (error) throw error;
            console.log('Data was insered!');
        });
        this.getConnection().closeConnection();
    }

}

function deleteData (key) {

    if (!this.getConnection().openConnection()) {
        let sql = 'DELETE FROM ' + this.getTable() + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
        this.getConnection().query (sql, function (error) {
            if (error) throw error;
            console.log('Data was deleted!');
        });
        this.getConnection().closeConnection ();
    }
    
}

function updateData (pool, table, key, data) {
    
}

var connection = new Database ('localhost', 'test', 'T3$tt$3T', 'test', 'test');
insertData ({'name':'Marcos', 'age':17});
deleteData ({'name':'Marcos'});
