const express=require('express');
const path=require('path')
const app=express();
const dotenv=require('dotenv')
const db=require('./utils/db')
app.use(express.json());
dotenv.config({path:'./config.env'})

//port
db();
const PORT=process.env.PORT||5000
const NODE_ENV='production'
//routes
app.use('/api',require('./routes/tech'))
app.use('/api',require('./routes/logs'))
//server static asset
if(NODE_ENV ==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))