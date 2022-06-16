import myProject from "../models/projectData.js";

// ? Fetching all the project form DataBase...
export const getAllProject = async (req, res) => {
  try {
    const allProject = await myProject.find();
    res.status(201).json(allProject);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// ? Creating a New Project:::
export const createProject = async (req, res) => {
  const data = req.body;
  const newProject = new myProject(data);
  try {
    const oneProject = await newProject.save();
    res.status(201).json(oneProject);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// ? Fetching a single Project Data:::
export const singleProject = async (req, res) => {
  const { Id } = req.params;
  try {
    const singleData = await myProject.findOne({ _id: Id });
    res.status(201).json(singleData);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// ? Update a single Data:::
export const updateProject = async (req, res) => {
  const { Id } = req.params;
  const data = req.body;
  try {
    const updateOne = await myProject.findOneAndUpdate({ _id: Id }, data, {
      new: true,
      runValidators: true,
    });
    res.status(201).json(updateOne);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// ! Delete a single Project Data:::
export const deleteProject = async (req, res) => {
  const { Id } = req.params;
  try {
    const deleteOne = await myProject.findOneAndDelete({ _id: Id });
    res.status(201).json(deleteOne);
  } catch (err) {
    res.status(404).json({ msg: err.message });
    console.log(err);
  }
};
