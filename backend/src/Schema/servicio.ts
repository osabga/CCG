const mongoose = require("mongoose")


const servicioSchema = new mongoose.Schema({
    titulo:String,
    subtitulo:String,
    imagen:String,
    date:Date
})

export default mongoose.model("Servicio",servicioSchema)