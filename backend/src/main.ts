const mongoose = require("mongoose")
const express = require('express')
import {userRouter} from "./Routes/users";
import User from "./Schema/user";
import dotenv from 'dotenv';
import Pregunta from "./Schema/pregunta";
import Categoria from "./Schema/categoria";
import { preguntasRouter } from "./Routes/preguntas";
import { adminRouter } from "./Routes/admin";
import {faqRouter} from "./Routes/faq";
import {productoRouter} from "./Routes/productos";
import {servicioRouter} from "./Routes/servicios"
import { categoriasRouter } from "./Routes/categoria";

/*
número de usuarios activos 
cantidad de preguntas realizadas en el día por mes,
 preguntas más realizadas y veces que se preguntaron
*/




/*const authMiddleware = require("./middleware/auth");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Tokens = require("csrf");

const tokens = new Tokens();

*/

const colors = {
  reset: "\x1b[0m",
  green : "\x1b[32;1m",
  red:"\x1b[31;1m"
};

const cors= require('cors')



dotenv.config();
const app = express()
app.listen(3005)

//app.use(cookieParser());
//app.use(bodyParser.json());
app.use(express.json());

app.use(cors())
//Funcion de pruebas
const resetDB = async () => {
    try {
       await Pregunta.deleteMany({})
      .then(() => User.deleteMany({}))
      .then(() => Categoria.deleteMany({}))
      .then(() => console.log("base de datos reiniciada"));
      const cat= new Categoria({tipoA:"General", tipoB:"Empresa", tipoC: "productoA"})
      await cat.save()
      //const pregunta_test = new Pregunta({ pregunta: "que dia es hoy?", respuesta: "domingoooo", categoria: cat });
      //await pregunta_test.save().then(()=>{console.log("agregado pregunta con categoria")});
    } catch (error) {
      console.error('error en base de datos', error);
    } 
  }; 



mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log(colors.green + "Connected!" + colors.reset))
  //.then(resetDB()) 
  .catch((error: any) => console.log(colors.red + "DB error " + colors.reset, error));


app.get("/", (req: any,res: any) => { console.log(" helloo "); res.send("my api endpoint")}  )
app.use("/users", userRouter)
app.use("/preguntas", preguntasRouter)
app.use("/admin",adminRouter)
app.use("/faq",faqRouter)
app.use("/productos",productoRouter)
app.use("/servicios",servicioRouter)