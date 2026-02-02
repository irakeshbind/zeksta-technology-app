const express = require('express');
const app = express();
// import it is file routes
const userRouter= require('./routes/User.js');

// it is use thhis router
app.use('/api',userRouter);

module.exports=app;


