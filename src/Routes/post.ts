import express, {Request,Response, Router } from 'express';
import { BlogService } from '../services/blogService';
import { responseError, responseSuccess } from '../response';

const blogRoute:Router = express.Router();

blogRoute.post('/',async(req:Request,res:Response) => {
    try {
        const {title,content} = req.body;

        if(title){
            responseError(res,'Title is required',400);
        }

        if(content){
            responseError(res,'Content is required',400);
        }

        const blogService = new BlogService();

        try {
            blogService.createPost(title,content).then((newBlog:any) => {
                if(newBlog){
                    responseSuccess(res,null,'Blog Created',200);
                }else{
                    responseSuccess(res,null,'Blog Not Created',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Blog Not Created',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

blogRoute.get('/all',async(req:Request,res:Response) => {
    try {
        
        const blogService = new BlogService();

        try {
            blogService.getAllPosts().then((newPost:any) => {
                if(newPost){
                    responseSuccess(res,newPost,'Posts',200);
                }else{
                    responseSuccess(res,null,'Posts Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Post Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

blogRoute.get('/:id',async(req:Request,res:Response) => {
    try {
        
        const blogService = new BlogService();

        try {
            blogService.getPost(req.params.id).then((newBlog:any) => {
                if(newBlog){
                    responseSuccess(res,newBlog,'Blog',200);
                }else{
                    responseSuccess(res,null,'Blog Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Blog Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

blogRoute.put('/:id',async(req:Request,res:Response) => {
    try {
        const {title,content} = req.body;

        if(title){
            responseError(res,'Title is required',400);
        }

        if(content){
            responseError(res,'Content is required',400);
        }

        const blogService = new BlogService();

        try {
            blogService.updatePost(req.params.id,title,content).then((newPost:any) => {
                if(newPost){
                    responseSuccess(res,newPost,'Post Updated',200);
                }else{
                    responseSuccess(res,null,'Post Not Updated',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Post Not Updated',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

blogRoute.delete('/:id',async(req:Request,res:Response) => {
    try {
        
        const blogService = new BlogService();

        try {
            blogService.deletePost(req.params.id).then((newPost:any) => {
                if(newPost){
                    responseSuccess(res,null,'Post Delete',200);
                }else{
                    responseSuccess(res,null,'Post Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Post Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

export default blogRoute;