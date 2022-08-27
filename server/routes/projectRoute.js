import express from "express";
import {
  getAllProject,
  createProject,
  singleProject,
  updateProject,
  deleteProject,
} from "../controllers/projectControl.js";
import authenticateUser from "../auth/authenticateUser.js";

const router = express.Router();

router.get("/", getAllProject);
router.get("/:Id", singleProject);

// *** Setting up the middleware to verify the authentic user...
router.use(authenticateUser);

router.patch("/:Id", updateProject);
router.post("/", createProject);
router.delete("/:Id", deleteProject);

export default router;
