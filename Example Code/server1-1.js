const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>안녕 제주도!</h1>');
    res.end('<p>이재광 븅신새끼!</p>');
});

server.listen(8080);


server.on('listening', () =>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});

server.on('error', (error) => {
    console.error(error);
});

