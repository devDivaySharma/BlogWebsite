import logger from "../logger";
import PostModel from "../models/post";
import { BlogInterface } from "./blogInterface";

export class BlogService implements BlogInterface {
   
    async createPost(title: string, content: string): Promise<any> {
        try {
            const newPost = await PostModel.create({title,content});
            return newPost;
        } catch (error) {   
            logger.error('Error createing post',error);
            throw error;
        }
    }


    async getPost(postId: string): Promise<any> {
        try {
            const post = await PostModel.findByPk(postId);
            if(!post){
                throw new Error('Post Not Found !');
            }
            return post;
        } catch (error) {   
            logger.error('Error get post',error);
            throw error;
        }
    }


    async getAllPosts(): Promise<any[]> {
        try {
            const posts = await PostModel.findAll();
            return posts;
        } catch (error) {   
            logger.error('Error getting all post',error);
            throw error;
        }
    }
    
    async updatePost(postId: string, title: string, content: string): Promise<any> {
        try {
            const [updateRowCount] = await PostModel.update({title,content},{where:{id:postId}});
            if(updateRowCount === 0){
                throw new Error('Post Not Found');
            }
            
            const updatedPost = PostModel.findByPk(postId);
            return updatedPost;
        } catch (error) {   
            logger.error('Error updateing post',error);
            throw error;
        }
    }

    async deletePost(postId: string): Promise<any> {
        try {
            const deleteRowCount = await PostModel.destroy({where : {id:postId}});
            if(deleteRowCount === 0){
                throw new Error('Post Not Found');
            }
            return 'Post Delete Successfully';
        } catch (error) {   
            logger.error('Error createing post',error);
            throw error;
        }
    }

}