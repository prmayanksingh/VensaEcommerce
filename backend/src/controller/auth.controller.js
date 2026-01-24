const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")

async function registerController(req, res) {
  const { username, name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username,
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
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

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  })

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
    { new: true },
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

async function logoutController(req, res){
  const token = req.cookies.token;

  if(!token){
    return res.status(400).json({message: "User not logged in"})
  }

  res.clearCookie("token",{
    httpOnly: true,
  });

  return res.status(200).json({
    message: "Logout successful"
  })
}

async function currentUserController(req, res){
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
      message: "User not logged in"
    })
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    return res.status(200).json({
      message: "Current user fetched successfully",
      user
    })
  }catch(err){
    return res.status(400).json({
      message: "Invalid or expired token"
    })
  }
}

module.exports = {
  registerController,
  loginController,
  updateUserController,
  deleteUserController,
  logoutController,
  currentUserController
};
