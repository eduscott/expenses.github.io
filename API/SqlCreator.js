export default class SqlCreator {

    //static methods
    static createInsertSQL (table, data) {
        let dataKeys = Object.keys(data);
        let dataValues = Object.values(data);
        let sql = 'INSERT INTO ' + table + ' (';
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
        return sql;
    }

    static createDeleteSQL (table, key) {
        return 'DELETE FROM ' + table + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
    }

    static createUpdateSQL (table, key, data) {
        let dataKeys = Object.keys (data);
        let dataValues = Object.values (data);
        let sql = 'UPDATE ' + table + ' SET ';
        for (let key in dataKeys) {
            sql += dataKeys[key] + ' = "' + dataValues[key] + '"';
            if (dataKeys[key] == dataKeys[dataKeys.length - 1]) {
                sql += ' ';
            } else {
                sql += ', ';
            }
        }
        sql += 'WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '";';
        return sql;
    }
 
    static createSelectSQL (table, columns) {
        if (columns) {
            let sql = 'SELECT ';
            for (column in columns) {
                sql += column;
                if (column == columns[columns.length - 1]) {
                    sql += ' ';
                } else {
                    sql += ', ';
                }
            }
            sql += 'FROM ' + table + ';';
            return sql;
        } else {
            return 'SELECT * FROM ' + table + ';'; 
        }
    }
}