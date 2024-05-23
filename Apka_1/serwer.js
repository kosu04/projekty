const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((request,response)=>{
    switch(request.url){
        case '/':
            response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
            fs.readFile(path.join(__dirname,"index.html"),(err,page) => {
                if(err){
                    response.end("Nie znaleziono pliku");
                }else{
                    response.end(page);
                }
            })
        break;
        
        case '/pages':
            response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
            fs.readFile(path.join(__dirname,"zainteresowania.html"),(err,page) => {
                if(err){
                    response.end("Nie znaleziono pliku");
                }else{
                    response.end(page);
                }
            })
        break;

        case '/pages':
            response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
            fs.readFile(path.join(__dirname,"muzyka.html"),(err,page) => {
                if(err){
                    response.end("Nie znaleziono pliku");
                }else{
                    response.end(page);
                }
            })
        break;
        }
    })

server.listen(5500,'127.0.0.1',()=>{
    console.log('Serwer działa i nasłuchuje');
});

