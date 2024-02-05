const signup = (req, res, next) => {
  try {
    res.send("signup")
  } catch (error) {
    next(error);
  }
};

const signin = (req, res, next) => {
  try {
    res.send("signin")
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};
