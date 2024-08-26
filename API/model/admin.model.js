import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const adminSchema = mongoose.Schema({
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
        Qualification:{
            type :String,
            trim:true,
            require:true
        },
        info:String,
        
    });

    adminSchema.plugin(mongooseUniqueValidator);

    const adminSchemaModel = mongoose.model("admin_Add",adminSchema);
    export default adminSchemaModel;