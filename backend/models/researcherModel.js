import mongoose from "mongoose";

const ResearcherSearchSchema = new mongoose.Schema(
  {
    searchMetadata: {
      id: {
        type: String,
        required: true,
        trim: true,
      },
      status: {
        type: String,
        required: true,
        trim: true,
      },
      jsonEndpoint: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      processedAt: {
        type: Date,
        default: Date.now,
      },
      googleScholarUrl: {
        type: String,
        required: true,
        trim: true,
      },
      rawHtmlFile: {
        type: String,
        required: true,
        trim: true,
      },
      totalTimeTaken: {
        type: Number,
        default: 0,
      },
    },
    searchParameters: {
      engine: {
        type: String,
        required: true,
        trim: true,
      },
      q: {
        type: String,
        required: true,
        trim: true,
      },
    },
    searchInformation: {
      totalResults: {
        type: Number,
        default: 0,
      },
      timeTakenDisplayed: {
        type: Number,
        default: 0,
      },
      queryDisplayed: {
        type: String,
        required: true,
        trim: true,
      },
    },
    organicResults: [
      {
        position: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
          trim: true,
        },
        resultId: {
          type: String,
          required: true,
          trim: true,
        },
        link: {
          type: String,
          required: true,
          trim: true,
        },
        snippet: {
          type: String,
          required: true,
          trim: true,
        },
        publicationInfo: {
          summary: {
            type: String,
            trim: true,
          },
        },
        inlineLinks: {
          serpapiCiteLink: {
            type: String,
            trim: true,
          },
          citedBy: {
            total: {
              type: Number,
              default: 0,
            },
            link: {
              type: String,
              trim: true,
            },
            citesId: {
              type: String,
              trim: true,
            },
            serpapiScholarLink: {
              type: String,
              trim: true,
            },
          },
          relatedPagesLink: {
            type: String,
            trim: true,
          },
          serpapiRelatedPagesLink: {
            type: String,
            trim: true,
          },
          versions: {
            total: {
              type: Number,
              default: 0,
            },
            link: {
              type: String,
              trim: true,
            },
            clusterId: {
              type: String,
              trim: true,
            },
            serpapiScholarLink: {
              type: String,
              trim: true,
            },
          },
          cachedPageLink: {
            type: String,
            trim: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('ResearcherModel', ResearcherSearchSchema);
