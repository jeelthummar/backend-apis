const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

port =  process.env.port || 3000
app.get("/api/contact",(req,res)=>{
    res.status(200).json({message:"this is contect data"})
})
app.post("/api/login",(req,res)=>{
    res.status(200).json({message:'this is login api'})
})
app.put("/api/update/:id",(req,res)=>{
     const id =req.params.id
    res.status(200).json({message:'user name is update of id ${id}'})
})
app.delete("/api/deleted/:id",(req,res)=>{
    const id =req.params.id
   res.status(200).json({message:'user name is deleted of id ${id}'})
})
app.listen(port,()=>{
    consol.log('this is port num ${port}')
})
