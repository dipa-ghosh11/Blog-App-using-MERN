import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { User } from './models/user';


const app=express();
app.use(cors());
app.use(express.json());

    
mongoose.connect("mongodb://localhost:27017")

app.post('/register', (req, res)=>
{
    const {username, password}=req.body;
    User.create({
        username, 
        password
    });
    res.json({requestData: {username, password}});
});

app.listen(4000);