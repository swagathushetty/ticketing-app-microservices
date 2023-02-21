import { ValidationError } from 'express-validator'


export class RequestValidationError extends Error {
    constructor(private errors:ValidationError[]){
        // same as this.errors=errors
        super()
        
        //only because we are extending a built in class
        Object.setPrototypeOf(this,RequestValidationError.prototype)
    }
}