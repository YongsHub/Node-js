const{
    Worker, isMainThread, parentPort
} = require('worker_threads');

if(isMainThread){
    const worker = new Worker(__filename); // 현재 파일에 워커스레드 생성

    worker.on('message', message => console.log('from worker', message)); // worker로 부터 메시지가 왔을 때 console.log
    worker.on('exit', () => console.log('worker exit')); //  worker에서 parentPort.close() 실행 시, worker.on('exit)이 실행됨
    worker.postMessage('ping'); // worker에게 'ping' 메시지를 보냄
}else{
    parentPort.on('message', (value) => { // parentPort.on 이벤트 리스너로 메시지를 받습니다.
        console.log('from parent', value);
        parentPort.postMessage('pong'); // 부모에게 'pon'이라는 메시지를 보냅니다.
        parentPort.close(); // 부모와의 연결 종료
    });
}