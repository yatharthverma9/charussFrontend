const express =require('express')
const server=express();
const dotenv = require('dotenv')
const jwt = require('./JwtManager.js')

const authRouter=require('./router/Authrouter')
const Clientrouter = require('./router/Clientrouter')
const userRouter = require("./router/userrouter")
const cors =require("cors");

server.use(express.json())
server.use(cors())





server.use("/service",userRouter)


server.use("/api",async(req,res,next)=>{
    const result = await jwt.authenticateToken(req);   //middel ware
    if(result.status)
    {
        next();
    }
    else
    {
        res.json(result)
    }
})
server.use("/api",Clientrouter)
server.use("/auth",authRouter)

const PORT = process.env.PORT || 3000;
server.listen(8083,()=>console.log(`http://localhost:${PORT}`))