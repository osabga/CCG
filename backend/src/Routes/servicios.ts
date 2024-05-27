import { postServicio } from "../controllers/servicio";


const express= require("express")

const servicioRouter = express.Router()

servicioRouter.post("/postservicio",postServicio)

export {servicioRouter}