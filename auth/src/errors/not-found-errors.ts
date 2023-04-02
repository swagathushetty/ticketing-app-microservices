import { CustomError } from "./custom-errors";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor(){
        super('route not found');

        Object.setPrototypeOf(this,NotFoundError.prototype)

    }


    seralizeErrors(){
        return [{
            message:'not found'
        }]
    }
}