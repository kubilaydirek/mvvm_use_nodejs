const express = require('express');
require('./db/database')
const JobModel = require('./model/job_postings_model');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/addJobPosting', async (req, res) => {
    try {
        const addJob = new JobModel(req.body);
        const saveJob = await addJob.save();
        res.send(saveJob);
    } catch (error) {
        res.send({ 'message': 'İş ilanı eklenirken bir hata oluştu.' })
    }
});

app.get('/getJobs', async (req, res) => {
    try {
        const jobs = await JobModel.find({});
        res.send(jobs);

    } catch (error) {

    }
})



app.listen(3000, _ => {
    console.log('3000 numaralı server ayaklandırıldı');
});

