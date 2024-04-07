
import {postUser} from "../controllers/users"

// done basic means it works but needs more validations
// done premium means fully done

const express = require("express")

const userRouter = express.Router()

userRouter.get("/:id", (req: any,res: any) => { res.send(`user ${req.params.id} `)})

// new user to db DONE BASIC 
userRouter.post("/", postUser)

export {userRouter};