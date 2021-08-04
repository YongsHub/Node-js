const{
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if(isMainThread){ // 부모 일 때
    const threads = new Set();

    threads.add(new Worker(__filename,{ // new Worker를 수행할 때, 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낼 수 있음
        workerData: {start: 1},
    }));

    threads.add(new Worker(__filename,{
        workerData: {start: 2},
    }));
    
    for(let worker of threads){ // threads 내 worker들에게 수행할 리스너들을 등록
        worker.on('message', message => console.log('from worker', message)); // 메시지 받을 시, from worker + 메시지 로깅
        worker.on('exit', () => { // 종료시 
            threads.delete(worker); // worker 삭제

            if(threads.size == 0){ // 스레드 집합 사이즈가 0 일 때
                console.log('job done'); // 'job done' 로깅
            }
        });
    }
}else{
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}