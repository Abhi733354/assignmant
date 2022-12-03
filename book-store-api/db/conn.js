const mongoose = require('mongoose');

const DB = 'mongodb+srv://opkassignment:opk123@cluster0.mh9qc0q.mongodb.net/book?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection succesfull');
}).catch((err) => console.log('no connection'));