const http = require('http');
const fs = require('fs')
function rqListener(req, res) {

}

/*Can also create anonoymous function for server
//http.createServer(function(req, res){

}); event driven node uses heavily.
http.createServer(rqListener);
http.createServer((req, res)=>{
});
*/

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if (url ==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Enter Message</title><head>');
        res.write('<body><form action="/message" method= "POST"><input type="text" name ="message"><button type ="submit"> Send</form></button></body>');
        res.write('</html>');
        return res.end();
    }
    if (url=== '/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);

        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];fs.writeFileSync('message.txt', message);
        });
        
        res.statusCode =302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // process.exit(); hard exit event loop of server
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My First Page</title><head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

