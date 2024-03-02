export interface BlogInterface {
    createPost(title:string,content:string):Promise<any>;
    getPost(postId:string):Promise<any>;
    getAllPosts():Promise<any[]>;
    updatePost(postId:string,title:string,content:string):Promise<any>;
    deletePost(postId:string):Promise<any>;
}