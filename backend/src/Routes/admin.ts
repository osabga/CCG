
import { getData, getMonthly} from "../controllers/admin"

// done basic means it works but needs more validations
// done premium means fully done
const express = require("express")

const adminRouter = express.Router()


adminRouter.post("/getData/:tipo", getData)

adminRouter.post("/getData/monthly/:tipo",getMonthly)




export {adminRouter};