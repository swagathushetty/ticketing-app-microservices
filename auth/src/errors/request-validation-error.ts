import { ValidationError } from "express-validator";
import { CustomError } from "./custom-errors";



export class RequestValidationError extends CustomError {
  statusCode = 500;

  constructor(public errors: ValidationError[]) {
    // same as this.errors=errors
    super('error due to validation');

    //only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  seralizeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
