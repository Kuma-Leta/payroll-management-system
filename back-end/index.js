const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();
const app=express();
console.log(process.env)
app.listen(process.env.PORT,()=>{
    console.log(`the server is running on port ${process.env.PORT}`);
})