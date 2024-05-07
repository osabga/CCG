import { postCategoria } from "../controllers/categorias"

const express= require("express")

const categoriasRouter = express.Router()

categoriasRouter.post("/post",postCategoria)

export {categoriasRouter}