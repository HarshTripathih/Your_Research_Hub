import mongoose from "mongoose";

const ResearcherSearchSchema = new mongoose.Schema({
  searchInformation: {
    searchTime: Number,
    formattedSearchTime: String,
    totalResults: Number,
    formattedTotalResults: String
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
      author: {
        name: String,
        url: String,
        email: {
          type: String,
          unique: true,
          required: true,
          trim: true
        }
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

export default mongoose.model('Researchers', ResearcherSearchSchema);