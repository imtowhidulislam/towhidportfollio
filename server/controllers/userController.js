import myUser from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcript from "bcryptjs";
import validator from "validator";

// ? Find All User Data ):
export const getAllUser = async (req, res, next) => {
  try {
    const allUser = await myUser.find().sort({ createdAt: -1 });
    res.status(200).json(allUser);
    next();
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
// ? Find a single User Data ):
export const getSingleUser = async (req, res, next) => {
  try {
    const { Id } = req.params;
    const singleUser = await myUser.findOne({ _id: Id });
    res.status(200).json(singleUser);
    next();
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
// ? Update an exsisting User ):
export const updateUser = async (req, res, next) => {
  const data = req.body;
  const { Id } = req.params;
  try {
    const newUser = await myUser.findOneAndUpdate({ _id: Id }, data, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(newUser);
    next();
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
// ? Delete an existence User ):
export const deleteUser = async (req, res, next) => {
  const { Id } = req.params;
  try {
    const deleteOne = await myUser.findOneAndDelete({ _id: Id });
    res.status(200).json(deleteOne);
    next();
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
// * Create new User ):
export const createUser = async (req, res, next) => {
  const data = req.body;
  const newUser = new myUser(data);
  try {
    await newUser.save();
    res.status(200).json(newUser);
    next();
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
// ? Creating token :::
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_PASS, {
    expiresIn: "1d",
  });
};
// !! Register a new User ):
export const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;
    if (!firstName || !lastName || !userName || !email || !password) {
      throw Error("All fiels are must be fill");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("password is not strong enough");
    }

    // * Verifying the use or email whether it is exist or not >>>
    const exsistUser = await myUser.findOne({ email });
    if (exsistUser) return res.status(401).send("Email is already exsist");

    // ! Encrypting the password with bcryipjs :::
    const salt = await bcript.genSalt(10);
    const encriptPass = await bcript.hash(password, salt);

    // ? Creatign new user:::
    const newUser = new myUser({
      firstName,
      lastName,
      userName,
      email: email.toLowerCase(),
      password: encriptPass,
    });
    // ? Creating Token for User:::
    const token = createToken(newUser._id);
    await newUser.save();
    res.status(200).json({ newUser, token });
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// !! Login User ):
export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUser = await myUser.findOne({ email });
    if (!checkUser) return res.status(401).send("Email is not exist");

    if (!email || !password) {
      throw Error("All fiels must be fill");
    }

    // ** Matching row password and hashing password:::
    const matchingPass = await bcript.compare(password, checkUser.password);

    if (!matchingPass) {
      throw Error("Verify your credentials");
    }

    const token = createToken(checkUser._id);
    res.status(200).json({ email, token });
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
