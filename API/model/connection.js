import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/test_sky"
mongoose.connect(url);
console.log("Mongodb Connected");

