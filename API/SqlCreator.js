//create a SQL command to insert data in database
function createInsertSQL(table, data) {
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
exports.createInsertSQL = createInsertSQL;

//create a SQL command to delete data in database
function createDeleteSQL(table, key) {
    return 'DELETE FROM ' + table + ' WHERE ' + Object.keys(key)[0] + ' = "' + Object.values(key)[0] + '"';
}
exports.createDeleteSQL = createDeleteSQL;

//create a SQL command to update data in database
function createUpdateSQL(table, key, data) {
    let dataKeys = Object.keys(data);
    let dataValues = Object.values(data);
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
exports.createUpdateSQL = createUpdateSQL;

//create a SQL command to select data in database
function createSelectSQL(table, columns) {
    let sql = 'SELECT ';
    if (typeof columns == 'undefined') {
        for (column in columns) {
            sql += column;
            if (column == columns[columns.length - 1]) {
                sql += ' ';
            } else {
                sql += ', ';
            }
        }
        sql += 'FROM ' + table + ';';
    } else {
        sql += '* FROM ' + table + ';';
    }
    return sql;
}
exports.createSelectSQL = createSelectSQL;