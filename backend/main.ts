const mongoose = require("mongoose")
const express = require('express')
import {userRouter} from "./Routes/users";
import User from "./Schema/user";


const mongo_test= new User({name:" yoyoyoyoyoyoyo",email:"hello",preguntasid:"hh"})
console.log(mongo_test)
import dotenv from 'dotenv';

dotenv.config();
const app = express()
app.listen(3000)


//mongoose.connect(process.env.DATABASE_URL).then(console.log("connected!!!###"))


app.get("/", (req: any,res: any) => { console.log(" helloo "); res.send("123")}  )

app.use("/users", userRouter)

console.log(process.env.DATABASE_URL) 



