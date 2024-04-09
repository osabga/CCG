import { Request, Response } from 'express';
import User from "../Schema/user"
import mongoose from 'mongoose';

export async function getUser(req:Request,res:Response){
    console.log(req.body.id)
    const user_string= req.body.id
    
    if (!user_string || !mongoose.isValidObjectId(user_string)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }


    User.findById(user_string)
    .then((user: any) =>{
        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(400).json({message:"user not found"});
        }
})
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

    return res.status(201).json(savedUser);
    }
    catch(error){
        console.error("no user in db :(", error)
    }
}

