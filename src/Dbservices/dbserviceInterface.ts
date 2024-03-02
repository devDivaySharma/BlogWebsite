export interface  DbServiceIntreface {
    post(url:string,data:any):Promise<any>;
    get(url:string,data:any):Promise<any>;
    put(url:string,data:any):Promise<any>;
    delete(url:string):Promise<any>;
}