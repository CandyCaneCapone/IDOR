const User = require("../models/user");
const UnAuthenticatedError = require("../errors/unauthenticated");
const BadRequestError = require("../errors/bad-request");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { username, email, password, bio } = req.body;

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      throw new UnAuthenticatedError("email already in use");
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

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new BadRequestError("please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new UnAuthenticatedError("wrong email or password");
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("wrong email or password");
    }

    const payload = { _id: user._id };
    
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.JWT_LIFE_TIME,
    });

    res.json({
      message: "logged in successfully",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};
