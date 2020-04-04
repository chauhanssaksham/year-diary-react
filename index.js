const express = require('express');
// const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 9000;


//Add CORS bypassing header
app.use(cors());

//req.body Middleware
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/', require('./routes'));

if (process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, err => {
    if (err) {console.log("Error in starting the server");}
    else{ console.log(`Server running on port ${port}!`)}
});