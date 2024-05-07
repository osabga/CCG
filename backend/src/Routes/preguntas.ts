import { postPregunta } from "../controllers/preguntas"

const express= require("express")

const preguntasRouter = express.Router()

preguntasRouter.post("/post",postPregunta)

export {preguntasRouter}