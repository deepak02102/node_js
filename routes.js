const fs = require('fs');
const requestHendler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>This is Home Page</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Click</button></form> </body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parserBody = Buffer.concat(body).toString();
            const message = parserBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                // console.log(res);
                return res.end();
            });
    
        });
    }
}

// module.exports = {
//     handeler : requestHendler,
//     someText : "This is some text"
// }

module.exports = requestHendler;