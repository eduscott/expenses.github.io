var Connection = require('./Connection').Connection;

var Database = function (host, user, password, database, table) {
    let __connection = '';
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

    //if (!this.getConnection().openConnection()) {
        let dataKeys = Object.keys (data);
        let dataValues = Object.values (data);
        let sql = 'INSERT INTO ' + this.getTable() + ' (';
        for (let key in dataKeys) {
            sql += dataKeys[key];
            if (dataKeys[key] == dataKeys[dataKeys.length - 1]){
                sql += ')';
            } else {
                sql += ',';
            }
        }
        sql += ' VALUES (';
        for (let value in dataValues) {
            sql += '"' + dataValues[value];
            if (dataValues[value] == dataValues[dataValues.length - 1]){
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
    //}

}

Database.prototype.deleteData = function (key) {

    //if (!this.getConnection().openConnection()) {
        let sql = 'DELETE FROM ' + this.getTable() + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
        this.getConnection().query (sql, function (error) {
            if (error) throw error;
            console.log('Data was deleted!');
        });
        this.getConnection().closeConnection ();
    //}
    
}

Database.prototype.updateData = function (key, data) {
    
    if (!this.getConnection().openConnection()) {
        let dataKeys = Object.keys (data);
        let dataValues = Object.values (data);
        let sql = 'UPDATE ' + this.getTable() + ' SET ';
        for (let key in dataKeys) {
            sql += dataKeys[key] + ' = "' + dataValues[key] + '"';
            if (dataKeys[key] == dataKeys[dataKeys.length - 1]) {
                sql += ' ';
            } else {
                sql += ', ';
            }
        }
        sql += 'WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '";';
        this.getConnection().query (sql, function (error) {
            if (error) throw error;
            console.log('Data was updated!');
        });
        this.getConnection().closeConnection ();
    }

}

Database.prototype.selectData = function (key) {

    if (!this.getConnection().openConnection()) {

    }

}
