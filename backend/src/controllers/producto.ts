import { Request, Response } from 'express';
import Producto from "../Schema/producto"

import mongoose from 'mongoose';


/*
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
*/

export async function postProducto(req:Request,res:Response){
    try{
    const body = req.body as {titulo?:string,subtitulo?:string,imagen?:any, date?:Date }

    if (!body || !body.titulo|| !body.subtitulo || !body.imagen || !body.date) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }


    const my_producto= new Producto({
    titulo:body.titulo,
    subtitulo:body.subtitulo,
    imagen: body.imagen,
    date: new Date(body.date)
    })


    const saved_producto = my_producto.save()
    return res.status(201).json(my_producto)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:'crash!'})

    }
}