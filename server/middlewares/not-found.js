const NotFoundError = require("../errors/not-found")

const notFound = (req , res , next) => {
    throw new NotFoundError("route not found")
}

module.exports = notFound ; 