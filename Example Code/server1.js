const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello JEJUDO!</h1>');
    res.end('<p>이재광 븅신새끼</p>');
})
    .listen(8080, () => {
        console.log('8080 포트에서 서버 대기 중입니다!');
    });

    