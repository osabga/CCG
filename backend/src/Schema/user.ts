
const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String, 

})

export default mongoose.model("User",userSchema);