const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send({message : "Akshansh kumar is awesome"});
    console.log("Sent! response!")
})

app.listen(8000)