const mongoose = require("mongoose");


enum tipo1 {
    General = "General",
    Especifico = "Especifico"
}

enum tipo2 {
    Empresa = "Empresa",
    Servicios = "Servicios",
    Productos = "Productos"
}

enum tipo3 {
    ProductoA = "productoA",
    ProductoB = "productoB"
}


const categoriaSchema = new mongoose.Schema({
    tipoA: {
        type: String,  
        enum: Object.values(tipo1),  
        required: true
    },
    tipoB: {
        type: String,
        enum: Object.values(tipo2),
        required: true
    },
    tipoC: {
        type: String,
        enum: Object.values(tipo3),
        required: true
    }
});

export default mongoose.model("Categoria", categoriaSchema);
