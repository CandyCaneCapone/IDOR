const User = require("../models/user");
const NotFoundError = require("../errors/not-found");

const editProfile = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { username, email, bio } = req.body;

    const user = await User.findByIdAndUpdate(userId, { username, email, bio } , {
      runValidators : true , 
      new : true 
    });
    if (!user) {
      throw new NotFoundError("user not found");
    }

    res.json({
      message: "user updated",
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  editProfile,
};
