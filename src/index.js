// require('dotenv').config({path:'./.env'})
import {app} from './app.js'
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {  DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' }) // this line will read the .env file and parse the contents and assign it to process.env

connectDB()
    .then(() => {  //here app will start listening and server will start.
        try {
            app.on("error", (error) => { //before listening to the server if any error is there . 
                console.log("ERROR", error);
                throw error
            })
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server is running at port ${process.env.PORT}`);
            }) //port is taken from the .env or manualy 8000
        } catch (error) {
            console.log("ERROR while starting the server", error);
        }
    })
    .catch((error) => {
        console.log("MONGODB connectioin failed", error);
    })





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