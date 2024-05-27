import { postProducto } from "../controllers/producto";


const express= require("express")

const productoRouter = express.Router()

productoRouter.post("/postProducto",postProducto)

export {productoRouter}