const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Job name is required"],
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
  },
  skills: {
    type: [String],
  },
  fields: {
    type: [String],
  },
  price: {
    type: Number,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
