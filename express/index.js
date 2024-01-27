const express = require("express"); // Importing  express

const app = express(); // Initializing express

app.get("/",(req,res)=>{
    res.send("<h1>Hello World Node.Js</h1>");
});

app.get("/blog",(req,res)=>{
    res.send("<h1>Welcome to my blog</h1>");
});

app.get("/channel/youtube",(req,res)=>{
    res.send("<h1>Welcome to my youtube channel</h1>");
});

app.listen(3000,(error) => {
    if (error){
        console.log("An error occurred!");
    }else{
        console.log("Server initialized");
    }
});