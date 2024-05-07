
import { preguntasData, getCategories } from "../controllers/admin"
// done basic means it works but needs more validations
// done premium means fully done
const express = require("express")

const adminRouter = express.Router()

//TODO Implementar servicio de conteo de preguntas por usuario CCK-101
adminRouter.post("/preguntas_data", preguntasData)

//TODO : obtener las categorias más populares CCK-102
adminRouter.post("/categories", getCategories  )


export {adminRouter};