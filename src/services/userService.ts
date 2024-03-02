import logger from "../logger";
import UserModel from "../models/user";
import { UserInterface } from "./userInterface";

export class UserService implements UserInterface {
    
    async createuser(username: string, firstName: string, lastName: string, password: string): Promise<any> {
        try {
            const newUser = await UserModel.create({username,firstName,lastName
            ,password});
            return newUser;
        } catch (error) {   
            logger.error('Error createing user',error);
            throw error;
        }
    }

    async getuser(userId: string): Promise<any> {
        try {
            const user = await UserModel.findByPk(userId);
            if(!user){
                throw new Error('User Not Found !');
            }
            return user;
        } catch (error) {   
            logger.error('Error get user',error);
            throw error;
        }
    }

    async getAllusers(): Promise<any[]> {
        try {
            const users = await UserModel.findAll();
            return users;
        } catch (error) {   
            logger.error('Error getting all users',error);
            throw error;
        }
    }

    async updateuser(userId: string,username:string, firstName: string, lastName: string): Promise<any> {
        try {
            const [updateRowCount] = await UserModel.update({username,firstName,lastName},{where:{id:userId}});
            if(updateRowCount === 0){
                throw new Error('User Not Found');
            }
            
            const updatedUser = UserModel.findByPk(userId);
            return updatedUser;
        } catch (error) {   
            logger.error('Error updateing user',error);
            throw error;
        }
    }
    
    async updateuserpassword(userId: string, password: string): Promise<any> {
        try {
            const [updateRowCount] = await UserModel.update({password},{where:{id:userId}});
            if(updateRowCount === 0){
                throw new Error('User Not Found');
            }
            
            const updatedUser = UserModel.findByPk(userId);
            return updatedUser;
        } catch (error) {   
            logger.error('Error updateing user',error);
            throw error;
        }
    }
 
   async deleteuser(userId: string): Promise<any> {
    try {
        const deleteRowCount = await UserModel.destroy({where : {id:userId}});
        if(deleteRowCount === 0){
            throw new Error('user Not Found');
        }
        return 'user Delete Successfully';
    } catch (error) {   
        logger.error('Error createing user',error);
        throw error;
    }
    }
}