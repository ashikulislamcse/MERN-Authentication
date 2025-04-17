import express from "express";
import { userLogin, userRegister } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.get("/login", userLogin);

export default userRouter;
