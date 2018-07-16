const sqlCreator = require('./SqlCreator');

//insert data in database
function insertData(connection, table, data) {
    
    connection.openConnection();
    if (connection.getStatus() == true) {
        let sql = sqlCreator.createInsertSQL(table, data);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was insered!');
        });
        connection.closeConnection();
    } 
    else {
        console.log('No active connection!');
    }

}
exports.insertData = insertData;

//delete data in database
function deleteData(connection, table, key) {

    connection.openConnection();
    if (connection.getStatus() == true) {
        let sql = sqlCreator.createDeleteSQL(table, key);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was deleted!');
        });
        connection.closeConnection();
    } 
    else {
        console.log('No active connection!');
    }

}
exports.deleteData = deleteData;

//update data in database
function updateData(connection, table, key, data) {

    connection.openConnection();
    if ((connection.getStatus() == true)) {
        const sql = sqlCreator.createUpdateSQL(table, key, data);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was updated!');
        });
        connection.closeConnection();
    }
    else {
        console.log('No active connection!');
    }

}
exports.updateData = updateData;

//select data of specific columns in database
function selectData(connection, table, columns) {

    connection.openConnection();
    if (connection.getStatus() == true) {
        const sql = sqlCreator.createSelectSQL(table, columns);
        console.log(sql);

        connection.query(sql, function (error, result, fields) {
            if (error) throw error;
            console.log('Data was selected!');
            return result;
        });
        connection.closeConnection();
    }
    else {
        console.log('No active connection!');
    }

}
exports.selectData = selectData;

//select data of all columns in database
function selectAllData(connection, table) {

    connection.openConnection();
    if (connection.getStatus() == true) {
        const sql = sqlCreator.createSelectSQL(table);
        console.log(sql);

        connection.query(sql, function (error, result, fields) {
            if (error) throw error;
            console.log('Data was selected!');
            return result;
        });
        connection.closeConnection();
    }
    else {
        console.log('No active connection!');
    }

}
exports.selectAllData = selectAllData;