import { CustomError } from "./custom-errors";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(message:string){
        super(message);

        this.message

        Object.setPrototypeOf(this,BadRequestError.prototype)

    }


    seralizeErrors(){
        return [{
            message:'not found'
        }]
    }
}