import { Request, Response } from 'express';
import Servicio from "../Schema/servicio"

import mongoose from 'mongoose';


export async function postServicio(req:Request,res:Response){
    try{
    const body = req.body as {titulo?:string,subtitulo?:string,imagen?:string, date?:Date }

    if (!body || !body.titulo|| !body.subtitulo || !body.imagen || !body.date) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }


    const my_servicio= new Servicio({
    titulo:body.titulo,
    subtitulo:body.subtitulo,
    imagen: body.imagen,
    date: new Date(body.date)
    })


    const saved_servicio = my_servicio.save()
    return res.status(201).json(my_servicio)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:'crash!'})

    }
}