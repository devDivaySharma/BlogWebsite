export interface CommentInterface {
    createcomment(text:string):Promise<any>;
    getcomment(commentId:string):Promise<any>;
    getAllcomments():Promise<any[]>;
    updatecomment(commentId:string,text:string):Promise<any>;
    deletecomment(commentId:string):Promise<any>;
}