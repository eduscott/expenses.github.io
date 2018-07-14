import Connection from 'ConnectionNew';

export default class Database {

    constructor (host, user, password, database, table) {
        this.__connection = new Connection (host, user, password, database).connection;
        this.__table = table;
    }

    //public get methods
    get connection () {
        return this.__connection;
    }
    get table () {
        return this.__table;
    }

    //others methods
    insertData (data) {
        
        if (!this.connection.openConnection ()) {
            let dataKeys = Object.keys(data);
            let dataValues = Object.values(data);
            let sql = 'INSERT INTO ' + this.table + ' (';
            for (let key in dataKeys) {
                sql += dataKeys[key];
                if (dataKeys[key] == dataKeys[dataKeys.length - 1]) {
                    sql += ')';
                }
                else {
                    sql += ',';
                }
            }
            sql += ' VALUES (';
            for (let value in dataValues) {
                sql += '"' + dataValues[value];
                if (dataValues[value] == dataValues[dataValues.length - 1]) {
                    sql += '");';
                }
                else {
                    sql += '",';
                }
            }
            console.log (sql);
            
            connection.query (sql, function (error) {
                if (error)
                    throw error;
                console.log ('Data was insered!');
            });
            this.connection.closeConnection ();
        }

    }

    deleteData (key) {

        if (!this.connection.openConnection ()) {
            let sql = 'DELETE FROM ' + this.table + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
            connection.query (sql, function (error) {
                if (error)
                    throw error;
                console.log ('Data was deleted!');
            });
            this.connection.closeConnection ();
        }

    }
}
