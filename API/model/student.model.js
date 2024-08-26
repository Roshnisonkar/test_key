import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const stuSchema = mongoose.Schema({
    _id:Number,

    Name:{
        type :String,
        trim:true,
        require:true
    },
    Email:{
        type :String,
        trim:true,
        require:true
    },
    Password:{
        type :String,
        trim:true,
        require:true,
        minlenght:5,
        maxlength:10
    },
    Mobile:{
        type :String,
        trim:true,
        require:true,
        minlenght:10,
        maxlength:10
    },
    info:String,
    status:Number,
    role:String
    
});

stuSchema.plugin(mongooseUniqueValidator);
const stuSchemaModel = mongoose.model("student",stuSchema);
export default stuSchemaModel;