import { Request, Response } from 'express';
import User from "../Schema/user"
import mongoose from 'mongoose';
const crypto= require('crypto')

// funciones auxiliares:
function getToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let randomString = '';
    for (let i = 0; i < 15; i++) {
        const randomIndex = crypto.randomInt(0, charactersLength);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// Controladores de usuario

// LOGIN
export async function login(req:Request,res:Response){
    try{
    console.log(req.body)
    const body = req.body as {email?:string,password?:string}

    // !mongoose.isValidObjectId(user_string)
    if (!body || !body.email || !body.password) {
        return res.status(400).json({ message: 'faltan datos del json' });
    }


    const my_user = await User.find(
    {
        email:body.email,
        password: body.password
    })

    if (my_user.length != 1){
        return res.status(400).json({message:'El usuario o la constraseña son incorrectos'});
    }
    return res.status(200).json({user:my_user,token:getToken()})
}
    
    catch{
    
        return res.status(400).json({message: 'ERROR'})
    }

}


// Registro de nuevo usuario.
export async function signUp(req:Request,res:Response){
    try{

    const body = req.body as { name?: string; email?: string; password?: string };
    
    if (!body || !body.name || !body.email || !body.password) {
        return res.status(400).json({ message: 'datos faltantes!'}); 
    }
    
    const emails_repetidos:number = await User.countDocuments({
        email:body.email
    })

    if (emails_repetidos != 0){
        return res.status(403).json({message: 'El email ya esta registrado'})
    }

    const my_user = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });

    const savedUser = await my_user.save()
    console.log("user registred db")
    return res.status(201).json({ user: savedUser, token: getToken()});
    }
    catch(error){
        console.error("user not posted in db :(", error)
    }
} 

