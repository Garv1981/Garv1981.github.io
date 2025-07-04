import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("server started")
})
app.use(express.static("public"))
app.get('/products',(req,res)=>{
    res.send("product list");
})