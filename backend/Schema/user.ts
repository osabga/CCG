
const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    preguntasId:Number // 

})

export default mongoose.model("User",userSchema);