// require('dotenv').config( {path: './env'})
// console.log(process.env) 
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import  express  from "express";

// const app=express()

import dotenv from "dotenv"

import connectDB from "./db/index1.js";


dotenv.config({
    path:'./.env'
});

connectDB();










// ( async ()=>{
// try {
//      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("ERR: ",error);
//         throw error
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
// } catch (error) {
//     console.log("ERROR", error);
//     throw error
// }
// })()