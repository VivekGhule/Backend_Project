import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from 'express'

const app = express()

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080 , () => {
        console.log(`Server is started at PORT : ${process.env.PORT}`);
        
    })

})
.catch((err) => {
    console.log("MONGO DB Connection Failed : ",err);
    
})