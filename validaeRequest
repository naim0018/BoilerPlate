import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"


export const validateRequest=(schema:AnyZodObject)=>{

    return async(req:Request,res:Response,next:NextFunction)=>{

        const zodParseData = schema.parseAsync(req.body)
        next()
    }
}
