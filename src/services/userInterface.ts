export interface UserInterface {
    createuser(username:string,firstName:string,lastName:string,password:string):Promise<any>;
    getuser(userId:string):Promise<any>;
    getAllusers():Promise<any[]>;
    updateuser(userId:string,username:string,firstName:string,lastName:string):Promise<any>;
    updateuserpassword(userId:string,password:string):Promise<any>;
    deleteuser(userId:string):Promise<any>;
}