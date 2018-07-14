import SqlCreator from './SqlCreator';

export default class Database {

    //static methods
    static insertData (connection, table, data) {
        
        if (!connection.openConnection ()) {
            let sql = SqlCreator.createInsertSQL (table, data);
            console.log (sql);
            
            connection.query (sql, function (error) {
                if (error) throw error;
                console.log ('Data was insered!');
            });
            connection.closeConnection ();
        }

    }

    static deleteData (connection, table, key) {

        if (!connection.openConnection ()) {
            let sql = SqlCreator.createDeleteSQL (table, key);
            console.log (sql);

            connection.query (sql, function (error) {
                if (error) throw error;
                console.log ('Data was deleted!');
            });
            connection.closeConnection ();
        }

    }

    static updateData (connection, table, key, data) {

        if (!connection.openConnection ()) {
            let sql = SqlCreator.createUpdateSQL (table, key, data);
            console.log (sql);

            connection.query (sql, function (error) {
                if (error) throw error;
                console.log ('Data was updated!');
            });
            connection.closeConnection ();
        }

    }

    static selectData (connection, table, columns) {
       
        if (!connection.openConnection ()) {
            let sql = SqlCreator.createSelectSQL (table, columns);
            console.log (sql);

            connection.query (sql, function (error) {
                if (error) throw error;
                console.log ('Data was selected!');
            });
            connection.closeConnection ();
        }

    }

    static selectAllData (connection, table) {

        if (!connection.openConnection ()) {
            let sql = SqlCreator.createSelectSQL (table);
            console.log (sql);

            connection.query (sql, function (error) {
                if (error) throw error;
                console.log ('Data was selected!');
            });
            connection.closeConnection ();
        }

    }
}
