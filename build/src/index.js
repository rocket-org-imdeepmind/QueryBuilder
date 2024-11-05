"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    static createDatabase(databaseName) {
        return `CREATE DATABASE ${databaseName};`;
    }
    static renameDatabase(oldDatabaseName, newDatabaseName) {
        return `ALTER DATABASE ${oldDatabaseName} RENAME TO ${newDatabaseName};`;
    }
    static dropDatabase(databaseName) {
        return `DROP DATABASE ${databaseName};`;
    }
    getDDLQueries(parameters) {
        switch (parameters.operation) {
            case 'CREATE_DATABASE':
                return QueryBuilder.createDatabase(parameters.database);
            case 'RENAME_DATABASE':
                if (parameters.newDatabase)
                    return QueryBuilder.renameDatabase(parameters.database, parameters.newDatabase);
                throw new Error('To rename a database, provide the new name of the database');
            case 'DROP_DATABASE':
                return QueryBuilder.dropDatabase(parameters.database);
            default:
                throw new Error(`The operation ${parameters.operation} is not supported`);
        }
    }
}
exports.default = QueryBuilder;
//# sourceMappingURL=index.js.map