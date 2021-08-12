const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data); // Buffer로 데이터를 전송할 수 도 있다.
    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081, () =>{
        console.log('8081 포트에서 서버 대기 중입니다!');
    });