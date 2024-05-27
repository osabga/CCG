import { postFaq } from "../controllers/faq";


const express= require("express")

const faqRouter = express.Router()

faqRouter.post("/postfaq",postFaq)

export {faqRouter}