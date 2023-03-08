import { Request,Response,NextFunction } from "express"
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{

   if(err instanceof RequestValidationError){
      const formattedErrors= err.errors.map((error)=>{
         return { message:error.msg,field:error.param}
      })
      return res.status(400).send({errors:formattedErrors})
      console.log('handling this error as request validation errror')
   }

   if(err instanceof DatabaseConnectionError){
      return res.status(400).send({errors:[{message:err.reason}]})
      console.log('handling error as DB connection error')
   }

 res.status(400).send({
    message:err.message
 })
}