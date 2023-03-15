import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  statusCode = 500;

  constructor(public errors: ValidationError[]) {
    // same as this.errors=errors
    super();

    //only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  seralizeErrors() {
    this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
