const express=require('express');

const app=express();
const db=require('./utils/db')
app.use(express.json());

//port
db();
const PORT=5000

//routes
app.use('/',require('./routes/tech'))
app.use('/',require('./routes/logs'))
//server static ass
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))