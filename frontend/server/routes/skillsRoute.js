import express from "express";
import {
  GetAllSkills,
  GetSingleSkill,
  createSkill,
  updateSkill,
  deleteSkills,
} from "../controllers/skillControl.js";

const router = express.Router();

router.get("/", GetAllSkills);
router.post("/create", createSkill);
router.get("/:Id", GetSingleSkill);
router.patch("/:Id", updateSkill);
router.delete("/:Id", deleteSkills);

export default router;
