import express from 'express'
import bcrypt from 'bcrypt'

const app = express();
app.listen(8080,()=>{
    console.log("server started")
})

// const pass= "pass1234"
// const hashpass = await bcrypt.hash(pass,10);
// console.log(hashpass)


const check = await bcrypt.compare("pass1234","$2b$10$xR3Dpe.h6EgWvUnbDecCyuO5T4pCzKXGFAs.Ke.N22uLZm.TuZQLO")
console.log(check)
