export class DatabaseConnectionError extends Error {
    reason= 'Error connecting to the database'
    statusCode = 500
    constructor(){
        super()

        Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
    }



    seralizeErrors(){
        return [
            {'message':this.reason}
        ]
    }
}