import {Response} from 'express';


export const responseError = (res:Response,error:any,code:number) => {
    res.status(code).json({data:null,message:error});
}

export const responseSuccess = (res:Response,data:any,message:string,code:number) => {
    res.status(code).json({data:data,message:message});
}

