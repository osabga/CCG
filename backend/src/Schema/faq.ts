const mongoose = require("mongoose")


const faqSchema = new mongoose.Schema({
    pregunta : String,
    respuesta : String,
    date:Date
})

export default mongoose.model("Faq",faqSchema)