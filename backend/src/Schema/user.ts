import mongoose from "mongoose";

interface User extends mongoose.Document{
    name:string,
    email:string,
    password:string, 
}
// TODO ADMIN??
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String, 

})

export {User};
export default mongoose.model<User>("User",userSchema);