const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("This is working just fine!!")
})

app.listen(8000)