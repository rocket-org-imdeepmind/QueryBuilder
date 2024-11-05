type TOperation = 'CREATE_DATABASE' | 'RENAME_DATABASE' | 'DROP_DATABASE';
interface TDDLParameters {
    operation: TOperation;
    database: string;
    newDatabase?: string;
}
declare class QueryBuilder {
    private static createDatabase;
    private static renameDatabase;
    private static dropDatabase;
    getDDLQueries(parameters: TDDLParameters): string;
}
export default QueryBuilder;
