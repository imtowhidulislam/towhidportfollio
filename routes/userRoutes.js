import express from "express";
import {
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
  createUser,
  registerUser,
  LoginUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", LoginUser);
userRouter.post("/create", createUser);
userRouter.get("/:Id", getSingleUser);
userRouter.patch("/:Id", updateUser);
userRouter.delete("/:Id", deleteUser);
userRouter.get("/", getAllUser);

export default userRouter;
