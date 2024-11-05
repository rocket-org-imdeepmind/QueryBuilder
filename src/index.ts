interface TDatabaseParameters {
  operation: 'CREATE_DATABASE' | 'RENAME_DATABASE' | 'DROP_DATABASE';
  database: string;
  newDatabase?: string;
}

// interface TTableColumn {
//   name: string;
//   dataType: string;
//   constrains: string[];
// }

// interface TTableParameters {
//   operation: 'CREATE_TABLE' | 'RENAME_TABLE' | 'DROP_TABLE';
//   table: string;
//   newColumns: TTableColumn[];
//   newDatabase?: string;
// }

class DDLDatabaseQueryBuilder {
  private static createDatabase(databaseName: string): string {
    return `CREATE DATABASE ${databaseName};`;
  }

  private static renameDatabase(
    oldDatabaseName: string,
    newDatabaseName: string,
  ): string {
    return `ALTER DATABASE ${oldDatabaseName} RENAME TO ${newDatabaseName};`;
  }

  private static dropDatabase(databaseName: string): string {
    return `DROP DATABASE ${databaseName};`;
  }

  public static getDDLDatabaseQueries(parameters: TDatabaseParameters) {
    switch (parameters.operation) {
      case 'CREATE_DATABASE':
        return DDLDatabaseQueryBuilder.createDatabase(parameters.database);
      case 'RENAME_DATABASE':
        if (parameters.newDatabase)
          return DDLDatabaseQueryBuilder.renameDatabase(
            parameters.database,
            parameters.newDatabase,
          );
        throw new Error(
          'To rename a database, provide the new name of the database',
        );
      case 'DROP_DATABASE':
        return DDLDatabaseQueryBuilder.dropDatabase(parameters.database);
      default:
        throw new Error(
          `The operation ${parameters.operation} is not supported`,
        );
    }
  }
}

// class DDLTableQueryBuilder {
//   private static createTable(
//     tableName: string,
//     constrains: TTableColumn[],
//   ): string {
//     const columns =
//       constrains.length > 0
//         ? constrains
//             .map(column => {
//               return `${column.name} ${column.dataType} ${column.constrains.join(' ')}`;
//             })
//             .join(', ')
//         : '';
//     return `CREATE TABLE ${tableName} ( ${columns} );`;
//   }

//   private static renameTable(
//     oldTableName: string,
//     newTableName: string,
//   ): string {
//     return `ALTER TABLE ${oldTableName} RENAME TO ${newTableName};`;
//   }

//   private static dropDatabase(databaseName: string): string {
//     return `DROP DATABASE ${databaseName};`;
//   }

//   public static getDDLTableQueries(parameters: TTableParameters) {
//     switch (parameters.operation) {
//       case 'CREATE_TABLE':
//         return DDLTableQueryBuilder.createTable(
//           parameters.table,
//           parameters.newColumns,
//         );
//       case 'RENAME_TABLE':
//         if (parameters.newDatabase)
//           return DDLTableQueryBuilder.renameTable(
//             parameters.table,
//             parameters.newDatabase,
//           );
//         throw new Error(
//           'To rename a database, provide the new name of the database',
//         );
//       case 'DROP_TABLE':
//         return DDLTableQueryBuilder.dropDatabase(parameters.table);
//       default:
//         throw new Error(
//           `The operation ${parameters.operation} is not supported`,
//         );
//     }
//   }
// }

export default DDLDatabaseQueryBuilder;
