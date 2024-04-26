import { Request, Response } from 'express';
import User from "../Schema/user"
import mongoose from 'mongoose';

export async function getUser(req:Request,res:Response){
    try{
    console.log(req.body)
    const body = req.body as {email?:string,password?:string}

    // !mongoose.isValidObjectId(user_string)
    if (!body || !body.email || !body.password) {
        return res.status(400).json({ message: 'Invalid request body' });
    }


    const my_user = await User.find(
    {
        email:body.email,
        password: body.password
    })
    
    return res.status(200).json(my_user)
}
    
    catch{
    
        return res.status(400).json({message: 'ERROR'})
    }

}



export async function postUser(req:Request,res:Response){
    try{

    const body = req.body as { name?: string; email?: string; password?: string };
    
    if (!body || !body.name || !body.email || !body.password) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }
    
    const my_user = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });

    const savedUser = await my_user.save()
    console.log("user in db")
    return res.status(201).json(savedUser);
    }
    catch(error){
        console.error("user not posted in db :(", error)
    }
} 

