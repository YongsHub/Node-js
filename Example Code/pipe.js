const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const writeStream = fs.createWriteStream('./writeme3.txt');

readStream.pipe(writeStream); // 스트림 끼리 연결하는 pipe 메서드

