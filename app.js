const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee=require("./models/employee")

const app=express()
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello")    
})

app.get("/search",(req,res)=>{
    res.send("welcome")
})

app.get("/delete",(req,res)=>{
    res.send("welc")
})

app.get("/viewall",(req,res)=>{
    res.send("we")
})


app.listen(8080,()=>{
    console.log("server started")
})

