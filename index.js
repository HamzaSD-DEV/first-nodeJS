//import http
const http = require('http');

const port = 3636;
const hostname = "localhost";
//create the server
const server= http.createServer((req,res)=>{

    console.log("url: ",req.url,"\nmethod: ",req.method);
    if (req.url==="/"){
        res.setHeader("ContentType","text/html");
        res.write("<h1>hello this is the home page</h1>");
        res.end();
    }else if (req.url==="/about"){
        res.setHeader("ContentType","text/html");
        res.write("<h1>this is the about page</h1>");
        res.end();
    }else {
        res.setHeader("ContentType","text/html");
        res.write("<h1>404</h1>");
        res.end();
    }

})
//listen to the server
server.listen(port,hostname,()=>{
    console.log("server is listening on port: ",port)
})