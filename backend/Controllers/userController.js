import userModel from "../Models/userModel.js";
import bcrypt from "bcryptjs";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res
        .status(404)
        .json({ success: false, message: "All Fields are Required" });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      res.status(404).json({
        success: false,
        message: "User Already Registerd by this email.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    res
      .status(200)
      .json({ success: true, message: "User Register Successfully." });
  } catch (error) {
    res.status(404).json({success: false, message: "Server Error for Registration"})
  }
};
