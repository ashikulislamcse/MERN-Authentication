import userModel from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if all fields exist
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }

    // check if user already exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already registered with this email.",
      });
    }

    // hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // create new user
    await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error during registration." });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User not Found.",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(409).json({
        success: false,
        message: "Password Wrong.",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json({
        success: true,
        user: { userId: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error during Login." });
  }
};



