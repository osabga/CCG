const express = require("express")

const userRouter = express.Router()

userRouter.get("/:id", (req: any,res: any) => { res.send(`user ${req.params.id} `)})

userRouter.post("/:id", (req:any, res:any) => {})

export {userRouter};