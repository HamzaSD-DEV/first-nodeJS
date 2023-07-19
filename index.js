//import http
//create the server
const http = require('http'), fs = require("fs"), port = 3636, hostname = "localhost",
    server = http.createServer((req, res) => {
        let path;
        let status;
        console.log("url: ", req.url, "\nmethod: ", req.method);
        if (req.url === "/" || req.url === "/home") {
            path = "./Views/home.html";
            status = 200;
        } else if (req.url === "/about") {
            path = "./Views/about.html";
            status = 200;
        } else {
            path = "./Views/error.html";
            status = 404;
        }
        fs.readFile(path,
            (err, data) => {
                res.setHeader("ContentType", "text/html");
                res.statusCode=status;
                res.write(data);
                res.end();

            }
        )

    });
//listen to the server
server.listen(port, hostname, () => {
    console.log("server is listening on port: ", port)
})