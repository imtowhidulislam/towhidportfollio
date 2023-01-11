import mongoose from "mongoose";

const createSkill = mongoose.Schema({
  icon: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const mySkill = mongoose.model("mySkill", createSkill);
export default mySkill;
