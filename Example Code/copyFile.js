const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt') // 노드 8.5 버전 이후에는 createReadStream과 createWriteStream을 pipe하지 않아도 파일 복사 가능.
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });

