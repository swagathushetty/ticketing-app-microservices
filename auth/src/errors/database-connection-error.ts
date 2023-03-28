import { CustomError } from "./custom-errors"

export class DatabaseConnectionError extends CustomError {
    reason= 'Error connecting to the database'
    statusCode = 500
    constructor(){
        super('error connecting to DB')

        Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
    }



    seralizeErrors(){
        return [
            {'message':this.reason}
        ]
    }
}