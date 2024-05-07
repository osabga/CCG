
import {signUp} from "../controllers/users"
import {login} from "../controllers/users"

// done basic means it works but needs more validations
// done premium means fully done
const express = require("express")

const userRouter = express.Router()


userRouter.post("/login", login)


userRouter.post("/signup", signUp)

export {userRouter};