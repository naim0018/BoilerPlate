import express, { Request, Response } from 'express'
import cors from 'cors'
import { StatusCodes } from 'http-status-codes'
import config from './app/config'
const app = express()


app.use(express.json())
app.use(cors())


app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        message:`Server Connected on ${config.port}`,
        data:"Server Running"
    })
})


app.use(globalErrorHandler)
app.use(notFound)


export default app
