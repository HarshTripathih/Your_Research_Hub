import ResearcherModel from '../models/researcherModel';


const getAllData = async (req, res) => {
  try {
    const data = await ResearcherModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createData = async (req, res) => {
  const data = new ResearcherModel(req.body);

  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDataById = async (req, res) => {
  try {
    const data = await ResearcherModel.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find data" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const data = await ResearcherModel.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find data" });
    }

    Object.assign(data, req.body);
    const updatedData = await data.save();
    res.json(updatedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await ResearcherModel.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find data" });
    }
    await data.remove();
    res.json({ message: "Deleted data" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData,
  createData,
  getDataById,
  updateData,
  deleteData,
};