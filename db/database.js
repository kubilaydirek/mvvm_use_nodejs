const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/JOB').then(_ => {
    console.log('DATABASE BAĞLANILDI');
}).catch(err => {
    console.log('DATABASE BAĞLANIRKEN HATA :' + err);
})