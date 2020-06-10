const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const LogSchema=new Schema({
    tech:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    attention:{
        type:Boolean,
        required: true,
    },
    Date:{
        type:Date,
        default:Date.now(),

    }



})
module.exports=mongoose.model('log',LogSchema)