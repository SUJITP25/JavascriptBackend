class APIError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false; // Note: 'success' should be spelled correctly
        this.errors = this.errors;
        this.stack = stack; // You might want to include stack if needed

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export {APIError}