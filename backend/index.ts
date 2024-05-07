const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');

import { login, signUp } from "./src/controllers/users";

const app = express();

// TODO CONFIGURAR CORS PARA IMPLEMENTAR SERVICIO EN LA NUBE CCK-201
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors()); // preflight OPTIONS; put before other routes

mongoose.connect(process.env.DATABASE_URL).then(() => console.log("Connected to the database!"))
.catch((error: any) => console.log("Failed to connect to the database:", error));

app.get("/", (req: any, res: any) => res.send("INDEX.JS"));
app.use("/users/login", login);
app.use("/users/signup", signUp);

console.log("boop");
module.exports = app;
