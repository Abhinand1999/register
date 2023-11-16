import  Express  from "express";
const app=Express()



app.use((req,res,next)=>{
    res.status(404).send({status:404,error:'api not found'})
})

app.listen(()=>{
    console.log("connect succsfully",3000)
})
