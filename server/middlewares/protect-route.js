const User = require("../models/user");
const UnAuthenticatedError = require("../errors/unauthenticated");

const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new UnAuthenticatedError("please provide token");
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new UnAuthenticatedError("please provide a valid token");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = protectRoute;
