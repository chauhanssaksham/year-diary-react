const express = require('express');
const db = require('./config/db');
const app = express();
const port = 9000;


//req.body Middleware
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=> res.send('Hello World!'));

app.listen(port, err => {
    if (err) {console.log("Error in starting the server");}
    else{ console.log(`Server running on port ${port}!`)}
});