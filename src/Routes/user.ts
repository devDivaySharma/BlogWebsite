import express, {Request,Response, Router } from 'express';
import { UserService } from '../services/userService';
import { responseError, responseSuccess } from '../response';

const userRoute:Router = express.Router();

userRoute.post('/',async(req:Request,res:Response) => {
    try {
        const {username,firstName,lastName,password} = req.body;

        if(username){
            responseError(res,'Username is required',400);
        }

        if(password){
            responseError(res,'Password is required',400);
        }

        const userService = new UserService();

        try {
            userService.createuser(username,firstName,lastName,password).then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,null,'User Created',200);
                }else{
                    responseSuccess(res,null,'User Not Created',200) ;
                }
            });
        } catch (error) {
            responseError(res,'User Not Created',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

userRoute.get('/all',async(req:Request,res:Response) => {
    try {
        
        const userService = new UserService();

        try {
            userService.getAllusers().then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,newUser,'Users',200);
                }else{
                    responseSuccess(res,null,'Users Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'User Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

userRoute.get('/:id',async(req:Request,res:Response) => {
    try {
        
        const userService = new UserService();

        try {
            userService.getuser(req.params.id).then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,newUser,'User',200);
                }else{
                    responseSuccess(res,null,'User Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'User Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

userRoute.put('/:id',async(req:Request,res:Response) => {
    try {
        const {username,firstName,lastName} = req.body;

        if(username){
            responseError(res,'Username is required',400);
        }

        if(firstName){
            responseError(res,'firstName is required',400);
        }

        if(lastName){
            responseError(res,'lastname is required',400);
        }

        const userService = new UserService();

        try {
            userService.updateuser(req.params.id,username,firstName,lastName).then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,newUser,'User Updated',200);
                }else{
                    responseSuccess(res,null,'User Not Updated',200) ;
                }
            });
        } catch (error) {
            responseError(res,'User Not Updated',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

userRoute.put('/password/:id',async(req:Request,res:Response) => {
    try {
        const {password} = req.body;

        if(password){
            responseError(res,'Password is required',400);
        }

        const userService = new UserService();

        try {
            userService.updateuserpassword(req.params.id,password).then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,newUser,'Password Updated',200);
                }else{
                    responseSuccess(res,null,'Password Not Updated',200) ;
                }
            });
        } catch (error) {
            responseError(res,'Password Not Updated',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

userRoute.delete('/:id',async(req:Request,res:Response) => {
    try {
        
        const userService = new UserService();

        try {
            userService.deleteuser(req.params.id).then((newUser:any) => {
                if(newUser){
                    responseSuccess(res,null,'User Delete',200);
                }else{
                    responseSuccess(res,null,'User Not Found',200) ;
                }
            });
        } catch (error) {
            responseError(res,'User Not Found',400);          
        }

    } catch (error) {
        responseError(res,'Server Error',500);          
    }
});

export default userRoute;