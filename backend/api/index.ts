const mongoose = require("mongoose")
const express = require('express');
const cors= require('cors')

import {userRouter} from "../src/Routes/users";
import { preguntasRouter } from "../src/Routes/preguntas";


const app = express();

app.use(cors())

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("Connected!"))
.catch((error: any) => console.log("DB error ", error));

app.get("/", (req:any, res:any) => res.send("WELCOME TO MY HOUSE"));

app.use("/users", userRouter)
app.use("/preguntas", preguntasRouter)

console.log("hello")
module.exports = app;