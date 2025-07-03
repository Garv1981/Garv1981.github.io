import http from "http"

let server = http.createServer((req, res)=>{
    res.end("request recieved.....")
})

server.listen(8080,()=>{
    console.log("server started");
})