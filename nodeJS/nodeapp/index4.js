import express from 'express'

const app = express()

app.listen(8080,()=>{
    console.log("server started")
})

// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// })

// app.get("/products",(req , res) =>{
//     // res.send("these are my products");
//     res.json({
//         id : 1,
//         name : "product 1",
//         price : 25
//     })
// })

// app.get("/name/:name",(req,res)=>{
//     res.send(req.params.name)
// })

// app.get("/name",(req,res)=>{
//     res.send("good morning")
// })

// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name + req.params.age)
// })

// app.get("/name/:name/age/:age",(req,res)=>{
//     res.send(req.params.name + req.params.age)
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization);
// })

// app.get("/",(req,res)=>{
//     res.send(req.headers);
// })

// app.get("/",(req,res)=>{
//     res.send(req.query.name + " " +req.query.age);
// })  
 //http://localhost:3000/?name=Garv&age=21

// app.get("/",(req,res)=>{
//     res.send("get request")
// })
// app.post("/",(req,res)=>{
//     res.send("post request")
// })
// app.delete("/",(req,res)=>{
//     res.send("delete request")
// })
// app.patch("/",(req,res)=>{
//     res.send("patch request")
// })