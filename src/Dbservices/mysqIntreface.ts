export interface MysqlIntreface {
    connect():Promise<void>;
    disconnect():Promise<void>;
    executeQuery(query:string,params?:any[]):Promise<any>;
}