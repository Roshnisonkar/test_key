import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const catSchema = mongoose.Schema({
    _id:Number,
        catname:{
            type :String,
            trim:true,
            require:true
        },
        img:{
            type :String,
            trim:true,
            require:true
        },
        info:String,
        
    });

    catSchema.plugin(mongooseUniqueValidator);

    const CategorySchemaModel = mongoose.model("cat",catSchema);
    export default CategorySchemaModel;