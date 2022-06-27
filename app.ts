import express, { Express, Request, Response } from 'express';
import http from 'http';
import {Server} from 'socket.io';
import path from "path";

import * as user from './user';
const port = 3000;
const app = express();
const httpServer = http.createServer(app);

const public_path = path.join(__dirname,"../front/dist");
app.use(express.static(public_path));

const io= new Server(httpServer,{cors:{origin:'*'}});

io.on("connect",socket=>{
    console.log("connect: ",socket.id);
    socket.on("log",(payload)=>{
        if(payload.name)
            user.add(user.create(socket.id,payload.name));
    })
    
    socket.on("error",err=>{console.log("error")});
    socket.on("disconnect",()=>{
        console.log("disconnect: ",socket.id);
        user.remove(socket.id);
    })
})

app.get("/",(req,res)=>{
    res.sendFile(public_path+"/index.html");
})
httpServer.listen(port,()=>console.log("listening on port:",port));