import mySkill from "../models/skillData.js";

// * GetAllSkills:::
export const GetAllSkills = async (req, res) => {
  try {
    const skill = await mySkill.find();
    res.status(200).json(skill);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
export const GetSingleSkill = async (req, res) => {
  const { Id } = req.params;
  try {
    const SingleSkill = await mySkill.findOne({ _id: Id });
    res.status(200).json(SingleSkill);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
export const createSkill = async (req, res) => {
  const skillbody = req.body;
  const newSkill = new mySkill(skillbody);
  try {
    const skill = await newSkill.save();
    res.status(200).json(skill);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
export const updateSkill = async (req, res) => {
  const { Id } = req.params;
  const skill = req.body;
  try {
    const skill = await mySkill.findOneAndUpdate({ _id: Id }, skill, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(skill);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

export const deleteSkills = async (req, res) => {
  const { Id } = req.params;
  try {
    const skill = await mySkill.findOneAndDelete({ _id: Id });
    res.status(200).json(skill);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
