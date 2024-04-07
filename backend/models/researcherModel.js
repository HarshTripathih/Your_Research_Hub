import mongoose from "mongoose";

<<<<<<< HEAD
const ResearcherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    affiliation: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    contact: {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
      website: {
        type: String,
      },
    },
    researchInterests: {
      type: [String],
      required: true,
    },
    education: [
      {
        degree: {
          type: String,
          required: true,
        },
        institution: {
          type: String,
          required: true,
        },
        graduationYear: {
          type: Number,
          required: true,
        },
      },
    ],
    publications: [
      {
        title: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    researchProjects: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    professionalExperience: [
      {
        position: {
          type: String,
          required: true,
        },
        organization: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    honorsAndAwards: [
      {
        title: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    professionalMemberships: {
      type: [String],
    },
    skills: {
      type: [String],
      required: true,
    },
    socialMediaProfiles: {
      linkedIn: {
        type: String,
      },
      researchGate: {
        type: String,
      },
    },
    photo: {
      type: String,
    },
=======
const ResearcherSearchSchema = new mongoose.Schema({
  searchInformation: {
    searchTime: Number,
    formattedSearchTime: String,
    totalResults: Number,
    formattedTotalResults: String
>>>>>>> 212989077c0df914cdb1812978cf518ef446905a
  },
  context: {
    title: String,
    source: String,
    pageMap: mongoose.Schema.Types.Mixed
  },
  relatedSearch: [{
    title: String,
    pixelsToCorrection: Number,
    value: String
  }],
  parseResults: [{
    scholar: {
      url: String,
      title: String,
      snippet: String,
      citation: {
        article: {
          author: [String],
          title: String,
          conferenceTitle: String,
          publisher: String,
          pageStart: Number,
          pageEnd: Number,
          volume: String,
          issue: String,
          year: Number,
          month: String,
          edition: String,
          entryId: String,
          pdf: {
            url: String,
            mime: String
          }
        },
        citation: String,
        citationId: String
      },
      cites: {
        count: Number,
        url: String
      },
      url: String,
      author: {
        name: String,
        url: String,
        emails: [String]
      },
      clusters: [{
        clusterId: String,
        url: String,
        heading: String
      }],
      plus: {
        url: String,
        authorship: String,
        html: String
      }
    }
  }]
});

export default mongoose.model("Researchers", ResearcherSchema);
