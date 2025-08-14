import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))  // for form data etc or accepting json file with limitations

app.use(express.urlencoded({extended : true, limit : "16kb"})) // for url data extended for nested data 

app.use(express.static("public")) // for storing statick data like pdf , file, img etc 

app.use(cookieParser()) // for cookies 

export { app }