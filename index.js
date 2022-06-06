import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
const app = express(); 
import serviceRouter from "./routes/services.js"
import bookingRouter from "./routes/booking.js"
import userRouter from "./routes/users.js"
import authRouter from "./routes/Auth.js"
// Connection ot mongoodb
app.use(cors()); 
app.use(express.json()); 
const uri = process.env.ATLAS_URI; 
const port = process.env.PORT || 5000; 
mongoose.connect(uri, {}); 

const connection = mongoose.connection ; 
connection.once('open', ()=> { 
    console.log(`MongoDB connected`) ;
})

app.listen(port, () => { 
    console.log(` Connection to Server: ${port}`) ;
});


// Router  
// Router for Service
app.use("/api/service", serviceRouter);
// Router for booking
app.use("/api/booking", bookingRouter);
// Router for user
app.use("/api/user",userRouter); 
//Router for login 
app.use("/api/login",authRouter); 

app.use((err,req, res, next) => { 
    const errorStatus = err.status ||500; 
    const errorMessage = err.message || "Something went wrong"; 
    return res.status(errorStatus).json({ 
        success: false, 
        status: errorStatus, 
        message:errorMessage, 
        stack: err.stack,
    });
}); 
