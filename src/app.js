import express from 'express'

import cors from 'cors' //a middleware that controls which websites are allowed to call your server from a browser

import cookieParser from 'cookie-parser' //a middleware that reads cookies sent by the browser and makes them easy to use in your code.

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