import User from "../Schema/user"
const mongoose = require("mongoose")



const preguntaSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pregunta : String,
    respuesta : String,
    categoria_pregunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
    date:Date
})

//export {Pregunta}
export default mongoose.model("Pregunta",preguntaSchema)