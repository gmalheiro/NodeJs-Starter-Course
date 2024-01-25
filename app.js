let http = require("http");

http.createServer((req,res) =>{
    res.end("<h1>Hello World JS</h1>");
}).listen(3000);

console.log("My server is running");