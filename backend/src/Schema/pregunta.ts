const mongoose = require("mongoose")



const preguntaSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pregunta:String,
    respuesta:String,
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
})

export default mongoose.model("Pregunta",preguntaSchema)