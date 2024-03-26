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



export const updateResearcherProfileController = async (req, res) => {
  try {
    const {
      name,
      affiliation,
      title,
      contact,  
      researchInterests,
      education,
      publications,
      researchProjects,
      professionalExperience,
      honorsAndAwards,
      professionalMemberships,
      skills,
      socialMediaProfiles,
      photo,
    } = req.body;

    // Find the researcher by their user ID
    const researcher = await Researcher.findById(req.user._id);

    // Update the researcher's profile fields based on the provided data
    const updatedResearcher = await Researcher.findByIdAndUpdate(
      req.user._id,
      {
        name: name || researcher.name,
        affiliation: affiliation || researcher.affiliation,
        title: title || researcher.title,
        contact: contact || researcher.contact,
        researchInterests: researchInterests || researcher.researchInterests,
        education: education || researcher.education,
        publications: publications || researcher.publications,
        researchProjects: researchProjects || researcher.researchProjects,
        professionalExperience:
          professionalExperience || researcher.professionalExperience,
        honorsAndAwards: honorsAndAwards || researcher.honorsAndAwards,
        professionalMemberships:
          professionalMemberships || researcher.professionalMemberships,
        skills: skills || researcher.skills,
        socialMediaProfiles:
          socialMediaProfiles || researcher.socialMediaProfiles,
        photo: photo || researcher.photo,
      },
      { new: true } // Return the updated document
    );

    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      updatedResearcher,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error While Updating Profile",
      error,
    });
  }
};
