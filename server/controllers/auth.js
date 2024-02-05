const User = require("../models/user");
const UnAuthenticatedError = require("../errors/unauthenticated");

const signup = async (req, res, next) => {
  try {
    const { username, email, password, bio } = req.body;

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      throw new UnAuthenticatedError("email already in use", "DUPLICATE_EMAIL");
    }

    const user = await User.create({ username, email, password, bio });
    
    res.status(201).json({
      message: "user created",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const signin = (req, res, next) => {
  try {
    res.send("signin");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};
