const express = require("express")
const userRouter = express.Router()

userRouter.get("/:id", (req: any,res: any) => { res.send(`user ${req.params.id} `)})

export {userRouter};