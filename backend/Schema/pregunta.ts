const mongoose = require("mongoose")
import Categoria from "./categoria"


const preguntaSchema = new mongoose.Schema({
    pregunta:String,
    respuesta:String,
    Categoria: Categoria
})

export default mongoose.model("Pregunta",preguntaSchema)