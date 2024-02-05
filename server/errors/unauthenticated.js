class UnAuthenticatedError extends Error {
    constructor(message) {
        super(message)
        this.errorName = "UNAUTHENTICATED_ERROR" 
        this.statusCode = 401 
    }
}

module.exports = UnAuthenticatedError ; 