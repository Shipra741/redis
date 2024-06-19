const express=require("express")
const app=express();
app.use(express.json())
const dotenv=require('dotenv').config()
const {addData}=require("./controller")
const port=process.env.PORT || 4000

app.post("/addData",addData)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})