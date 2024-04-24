import { Request, Response } from 'express';
import Pregunta from "../Schema/pregunta"
import {User} from '../Schema/user';
import { Categoria } from '../Schema/categoria';
import mongoose from 'mongoose';

export async function postPregunta(req:Request,res:Response){
    try{
    const p_json = req.body as {user?: User ,pregunta?:string,respuesta?:string,categoria?:Categoria}

    if (!p_json || !p_json.user || !p_json.pregunta|| !p_json.respuesta || !p_json.categoria) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }
    
    const my_pregunta= new Pregunta({
    user: p_json.user,
    pregunta:p_json.pregunta,
    respuesta:String,
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
    })

    const saved_pregunta = my_pregunta.save()
    return res.status(201).json(saved_pregunta)
    }
    catch(error){
        return res.status(400).json({message:'crash!'})       
    }
}