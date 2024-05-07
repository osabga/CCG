
import { Request, Response } from 'express';

export async function postCategoria(req:Request,res:Response){

    const body = req.body as { name?: string; email?: string; password?: string };
    
    if (!body || !body.name || !body.email || !body.password) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }

}