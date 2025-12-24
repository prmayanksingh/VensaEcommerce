const userModel = require("../models/user.model");

async function registerController(req, res) {
  const { username, name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = await userModel.create({
    username,
    name,
    email,
    password,
  });

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password" });
  }

  return res.status(200).json({
    message: "Login successful",
    user,
  });
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const { username, name, email, password, cart } = req.body;

  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    {
      username,
      name,
      email,
      password,
      cart,
    },
    { new: true }
  );

  return res.status(200).json({
    message: "User cart updated successfully",
    user: updatedUser,
  });
}

async function deleteUserController(req, res) {
  const { id } = req.params;

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  await userModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "User deleted successfully",
  });
}

module.exports = {
  registerController,
  loginController,
  updateUserController,
  deleteUserController,
};
