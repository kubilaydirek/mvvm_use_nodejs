const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
    category: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    jobDescription: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true
    }

}, { collection: 'job_posting', timestamps: true });

const JobPostingModel = mongoose.model('JobModel', jobPostingSchema);

module.exports = JobPostingModel;