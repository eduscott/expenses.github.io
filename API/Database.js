const sqlCreator = require('./SqlCreator');
const c = require('./Connection');

//insert data in database
function insertData(connection, table, data) {

    if (!connection.openConnection()) {
        let sql = sqlCreator.createInsertSQL(table, data);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was insered!');
        });
        connection.closeConnection();
    }

}
exports.insertData = insertData;

//delete data in database
function deleteData(connection, table, key) {

    if (!connection.openConnection()) {
        let sql = sqlCreator.createDeleteSQL(table, key);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was deleted!');
        });
        connection.closeConnection();
    }

}
exports.deleteData = deleteData;

//update data in database
function updateData(connection, table, key, data) {

    if (!connection.openConnection()) {
        const sql = sqlCreator.createUpdateSQL(table, key, data);
        console.log(sql);

        connection.query(sql, function (error) {
            if (error) throw error;
            console.log('Data was updated!');
        });
        connection.closeConnection();
    }

}
exports.updateData = updateData;

//select data of specific columns in database
function selectData(connection, table, columns) {

    if (!connection.openConnection()) {
        const sql = sqlCreator.createSelectSQL(table, columns);
        console.log(sql);

        connection.query(sql, function (error, result, fields) {
            if (error) throw error;
            console.log('Data was selected!');
            return result;
        });
        connection.closeConnection();
    }

}
exports.selectData = selectData;

//select data of all columns in database
function selectAllData(connection, table) {

    if (!connection.openConnection()) {
        const sql = sqlCreator.createSelectSQL(table);
        console.log(sql);

        connection.query(sql, function (error, result, fields) {
            if (error) throw error;
            console.log('Data was selected!');
            return result;
        });
        connection.closeConnection();
    }

}
exports.selectAllData = selectAllData;