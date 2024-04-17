const User = require("../models/User.js");

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const findAll = async () => {
  const users = await User.find();
  return users;
};

const findUser = async (id) => {
  const user = await User.findById({_id: id});
  return user;
}

const updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate({_id: id}, userData, {new: true});
  return user
}

const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete({_id: id});
  return user
}





module.exports = {
  createUser,
  findAll,
  findUser,
  updateUser,
  deleteUser
 
};
