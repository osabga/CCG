import { Request, Response } from 'express';
import Pregunta from "../Schema/pregunta"
import User from '../Schema/user';

import Categoria  from '../Schema/categoria';
import mongoose from 'mongoose';


// Poder hacer chequeo de tipado de la pregunta
// agregar la pregunta a la base de datos
export async function postPregunta(req:Request,res:Response){
    try{
    const body = req.body as {usuario?: string ,pregunta?:string,respuesta?:string,categoria?:string,date?:string}

    if (!body|| !body.usuario || !body.pregunta|| !body.respuesta || !body.categoria || !body.date) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }

    const buscar_usuario:number = await User.countDocuments({
        _id:body.usuario
    })

    if (buscar_usuario == 0){
        return res.status(403).json({message:'usuario inexistente'})
    }
    
    const buscar_categoria:number = await Categoria.countDocuments({
        _id:body.categoria
    })

    if(buscar_categoria==0){
        return res.status(403).json({message:'categoria inexistente'})
    }

    const my_pregunta= new Pregunta({
    user: body.usuario,
    pregunta:body.pregunta,
    respuesta:body.respuesta,
    categoria: body.categoria,
    date: new Date(body.date)
    })


    const saved_pregunta = my_pregunta.save()
    return res.status(201).json(my_pregunta)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:'crash!'})

    }
}