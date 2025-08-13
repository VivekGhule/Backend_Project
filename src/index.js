import dotenv from "dotenv"


import mongoose from "mongoose"
import {DB_NAME} from "./Constant.js"
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})

connectDB()