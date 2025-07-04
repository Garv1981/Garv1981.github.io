import express from 'express'
const app = express();
app.listen(8080,()=>{
    console.log("server started");
})

const logger = (req,res,next) =>{
    req.message = "Logger";
    next();
}

// app.use(logger);          //har incoming request pe logger middleware chalega.
app.get('/',(req,res)=>{
    res.send(req.message);
})
app.get('/products',logger,(req,res)=>{
    res.send(req.message);   
})