const express = require('express');
const app = express();
const connectDatabase = require('./config/db');


connectDatabase();
app.use(express.json());


//route
// app.use('/api/users', usersRouter);






//start server
app.listen(process.env.PORT, ()=>{
    console.log('listening on port ' + process.env.PORT);  
})