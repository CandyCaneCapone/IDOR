class UnAuthenticatedError extends Error {
    constructor(message , errorName) {
        super(message)
        this.errorName = errorName 
        this.statusCode = 401 
    }
}

module.exports = UnAuthenticatedError ; 