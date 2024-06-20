import { Response } from "express";


type TSendResponse <T>= {
    statusCode : number,
    success:boolean,
    message:string,
    data: T
}

export const sendResponse=<T>(res:Response,payload:TSendResponse<T>)=>{
    return res.status(payload.statusCode).json({
        statusCode:payload.statusCode,
        success:payload.success,
        message:payload.message,
        data:payload.data
    })
}
