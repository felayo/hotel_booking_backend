import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const mappedUsers = users.map((user) => {
      return {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        country: user.country,
        city: user.city,
        image: user.img,
        date_created: user.createdAt,
        date_updated: user.updatedAt,
      };
    });
    res.status(200).json(mappedUsers);
  } catch (err) {
    next(err);
  }
};
