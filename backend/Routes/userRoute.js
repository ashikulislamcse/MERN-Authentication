import express from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../Controllers/userController.js";
import isAuthentication from "../Config/isAuth.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/logout", isAuthentication, userLogout);

export default userRouter;
