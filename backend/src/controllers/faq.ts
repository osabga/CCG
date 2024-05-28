import { Request, Response } from 'express';
import Faq from "../Schema/faq"

import mongoose from 'mongoose';


export async function postFaq(req:Request,res:Response){
    try{
    const body = req.body as {pregunta?:string,respuesta?:string,date?:string}

    if (!body || !body.pregunta|| !body.respuesta || !body.date ) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }

    const my_Faq= new Faq({
    
    pregunta:body.pregunta,
    respuesta:body.respuesta,
    date: new Date(body.date)
    })


    const saved_Faq = my_Faq.save()
    return res.status(201).json(my_Faq)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:'crash!'})

    }
}