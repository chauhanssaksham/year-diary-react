const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
 
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;