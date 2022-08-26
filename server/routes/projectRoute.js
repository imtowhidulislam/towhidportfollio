import express from "express";
import {
  getAllProject,
  createProject,
  singleProject,
  updateProject,
  deleteProject,
} from "../controllers/projectControl.js";

const router = express.Router();

router.get("/", getAllProject);
router.post("/", createProject);
router.get("/:Id", singleProject);
router.patch("/:Id", updateProject);
router.delete("/:Id", deleteProject);

export default router;
