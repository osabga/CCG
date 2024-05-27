const mongoose = require("mongoose")


const productoSchema = new mongoose.Schema({
    titulo:String,
    subtitulo:String,
    imagen:String,
    date:Date
})

export default mongoose.model("Producto",productoSchema)