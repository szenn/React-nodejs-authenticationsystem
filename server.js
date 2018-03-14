const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/api/api');

const app = express();

// MIDDLEWARE //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, '/client/public')));




app.use((err, req, res, next) => {
    res.send({error: err.message});
});
app.use('/api', users);

// SERVE //
app.listen(process.env.port || 5000 , () => {
    console.log('server is running');
});





