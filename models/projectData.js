import mongoose from "mongoose";

const randomNumber = Math.floor(Math.random() * 100000000000 + 1);
const crateProject = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      max: 20,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      max: 20,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      max: 50,
    },
    sourceLink: {
      type: String,
      required: true,
      trim: true,
    },
    gitHub: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const myProject = mongoose.model("myProject", crateProject);
export default myProject;
