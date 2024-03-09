// require('dotenv').config({path:'./.env'})

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {  DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({path:'./.env'}) // this line will read the .env file and parse the contents and assign it to process.env

connectDB()




/*
// this is one approach to connect database

import express from "express";
const app = express();


//using IFFE
(async()=>{
    try{
        
       await mongoose.connect(`${process.env.MONGODB_URL}/${ DB_NAME }`) //connecting to the database (process.env.mongodb_url) means we will get the mongodb url from .env filez  and {db_name} means we will get the db_name from constants.js file. and await means it will wait till the promise is resolved.

        app.on("error",(error)=>{
            console.log("ERROR:",error); // this function will be called when there is an error while connecting to express app
            throw err
        })

        app.listen(`$procss.env.PORT`,()=>{
            console.log(`Server is running on port ${process.env.PORT}`); // this function will be called when the server is running successfully
        })


    }catch(error){
        console.log("ERROR!: ",error)
        throw err
    }
})()
*/