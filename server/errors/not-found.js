class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.statusCode = 404 ; 
        this.errorName = "NOT_FOUND_ERROR"
    }
}

module.exports = NotFoundError ; 