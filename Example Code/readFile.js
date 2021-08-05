const fs = require('fs'); // fs모듈은 파일 시스템에 접근하는 모듈

fs.readFile('./readme.txt', (err, data) => {
    if(err){
        throw err;
    }

    console.log(data);
    console.log(data.toString());
})

