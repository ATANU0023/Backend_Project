import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

//config 

app.use(cors({ // for cors policy
    origin: process.env.CORS_ORIGIN,
    credentials:true,

}));
app.use(express.json({   // for parsing application/json
    limit: '20kb',
}));

app.use(express.urlencoded({
    extended:true, // for parsing application/x-www-form-urlencoded'
    limit: '20kb'
}))

app.use(express.static('public')) // for serving static files
app.use(cookieParser()) // for parsing cookies


//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users",userRouter)


export {app}