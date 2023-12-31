const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING.replace('<password>',process.env.PASSWORD))
const port=8000
// const jwt=require('jsonwebtoken')
// const secretKey='secret'
// const payload={
//     username:"kleta",
//     password:123
// }
// const token=jwt.sign(payload,secretKey,{expiresIn:'1h'})
// console.log('generated jwt :',token)
const userAuthenticationData = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const userData=mongoose.model('userData',)
const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const employeeSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  socialSecurityNumber:{
    type:String,
    required:true
  }
  
});
const model=mongoose.model('employeeData',DbSchema)
// app.post('/')
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})