import { Request, Response } from 'express';
import User from "../Schema/user"

export async function postUser(req:Request,res:Response){
    try{

    const body = req.body as { name?: string; email?: string; password?: string };
    
    if (!body || !body.name || !body.email || !body.password) {
        console.log(body.name,body.email,body.password)
        return res.status(400).json({ message: 'datos faltantes!' });
        
    }
    
    
    const my_user = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });

    const savedUser = await my_user.save()

    return res.status(201).json(savedUser);
    }
    catch(error){
        console.error("no user in db :(", error)
    }
}