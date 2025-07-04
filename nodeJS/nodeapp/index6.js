import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server started");
});
app.use(express.json());
// app.post("/",(req,res) =>{
//     res.send(req.body)
// })

let products = [];
// app.post("/",(req,res)=>{
//     products.push(req.body);
//     res.send("product created");
// })

app.post("/", (req, res) => {
    try{
  const { name, price } = req.body;
  const found = products.find((product) => product.name === name);
  if (found) res.send("product already exsits");
  else {
    products.push(req.body);

    res.status(201).json({ message: "products created" });
  }}
  catch(err){
    res.status(400).json({ message: "something went wrong" });
  }
  
});
app.get("/", (req, res) => {
  res.json(products);
});

app.delete("/:name",(req,res)=>{
    try{
    const name = req.params.name;
    products = products.filter(val => val.name !== name)
    res.json({ message: "Product deleted" });
    }
    catch(err){
        res.json({ message: "something went wrong" });
    }
   
})

app.patch("/",(req,res)=>{
    res.send(req.body);
})

