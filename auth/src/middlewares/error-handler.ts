import { Request,Response,NextFunction } from "express"
import { CustomError } from "../errors/custom-errors"

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{


   if(err instanceof CustomError){
      return res.status(err.statusCode).send({errors:err.seralizeErrors()})
   }
   // if(err instanceof RequestValidationError){
   //    return res.status(err.statusCode).send({errors:err.seralizeErrors()})
   // }

   // if(err instanceof DatabaseConnectionError){
   //     return res.status(err.statusCode).send({errors:err.seralizeErrors()})
   // }

 res.status(400).send({
    errors:[
      {message:'something went wrong'}
    ]
 })
}