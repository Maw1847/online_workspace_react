const express = require('express');
require ('./models/dbConfig');
const app = express();
const userRoute = require('./controllers/user');

app.use('/', userRoute);


app.listen(5500, () => console.log('server started'));