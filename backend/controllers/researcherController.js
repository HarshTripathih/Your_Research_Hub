import researchers from "../models/researcherModel.js";


export const getAllData = async (req, res) => {
  try {
    const data = await researchers.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Create a new data 
export const createData = async (req,res) => {
  try{
      const createData = await researchers.create(req.body);
      res.status(201).send(createData);
      console.log("Body",createData);

  }catch(err){
      res.status(500).send({message : "Error in creating the data " , error: err.message});
  }
}

export const getDataById = async (req, res) => {
  try {
    const data = await researchers.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find data" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    const data = await researchers.findById(req.params.id);
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

export const deleteData = async (req, res) => {
  try {
    const data = await researchers.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: "Cannot find data" });
    }
    await data.remove();
    res.json({ message: "Deleted data" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
