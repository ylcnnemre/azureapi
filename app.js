const express=require("express")

const app=express()


app.get("/test",(req,res)=>{
    res.send("selammmm")
})



app.listen(3000,()=>{
    console.log("server is running")
})