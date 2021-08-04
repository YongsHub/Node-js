const {Worker,isMainThread, parentPort, workerData} = require('worker_threads');

const min = 2; // 최솟값

let primes = []; // 소수의 갯수를 구하기 위한 배열


function findPrimes(start, range){ // 소수를 구하기 위한 함수
    let isPrime = true;
    let end = start + range;

    for(let i = start; i < end; i++){
        for(let j = min; j < Math.sqrt(end); j++){
            if(i !== j && i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
    }
}


if(isMainThread){
    const max = 10000000;
    const threadCount = 8; // worker thread 개수 8개로 선정

    const threads = new Set(); // worker thread 담기 위해서

    const range = Math.ceil((max - min) / threadCount); // 스레드 개수로 1000000-2의 ceil을 적용하면 1250000

    let start = min;

    console.time('prime'); // 시간 측정

    for(let i = 0; i < threadCount - 1; i++){ // worker 스레드 7개를 반복문으로 설정해준다.
        const wStart = start;
        threads.add(new Worker(__filename, {workerData: {start: wStart, range}})); // 현재 파일명에서 worker thread의 start는 min 값에서 시작해서
        start += range; // start 값은 range 값만큼 더해져서 처음에는 2, 1250002, 2500002 ... 이런식으로 증가
    }

    threads.add(new Worker(__filename, {workerData: {start, range: range + ((max-min+1) % threadCount)}})); // 마지막 8번째 스레드는 남은 갯수만큼 수행

    for(let worker of threads){
        worker.on('error', (err) => {
            throw err;
        });

        worker.on('exit', () => {
            threads.delete(worker); // worker 스레드 종료시 스레드 삭제

            if(threads.size === 0){
                console.timeEnd('prime'); // 시간 측정
                console.log(primes.length); // 소수 갯수 로깅
            }
        });

        worker.on('message', (msg) => {
            primes = primes.concat(msg); // worker thread로부터 msg(배열)을 전달받으면 concat을 이용하여 하나의 배열로 만듬
        });
    }

}else{ // Main Thread가 아닐시에,
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes); // 부모 스레드에게 메시지를 전달.
}