// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";

import connectDB from "./db";
import dotenv from "dotenv"






dotenv.config({
    path:'./env'
})



connectDB()
.then(()=>{
    appp.listnen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("DB connection Error", error)
})


// import express from "express"
// const app=express()

// ;(async ()=>{
//     try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("error",()=>{
//             console.log("application not able to talk to database")
//             throw error
//          })

//          app.listen(process.env.PORT,()=>{
//             console.log(`App is Listening on ${process.env.PORT}`)
//          })

//     } catch(error){
//         console.log(error);
        
//     }
// })()