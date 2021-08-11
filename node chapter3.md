<!-- Heading -->
# REPL

자바스크립트는 스크립트 언어이므로 미리 컴파일을 하지 않아도 즉석에서 코드를 실행할 수 있습니다. 노드도 자바스크립트와 마찬가지로 비슷한 콘솔을 제공하는데, 입력한 코드를 읽고 해석하고 결과물을 반환하고 종료할 때까지 반복한다고 해서 **REPL**(Read Eval Print Loop)이라고 부릅니다.

___

<!-- Quote -->
>노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와 다르다. 모듈이란? 특정한 기능을 하는 함수나 변수들의 집합이다. 모듈은 자체로도 하나의 프로그램이면서 다른 프로그램의 부품으로도 사용할 수 있습니다. 보통 파일 하나가 모듈 하나가 되는데, 파일별로 코드를 모듈화 할 수 있어 관리하기 편하다.

<!-- Bullet List -->
모듈화에서 알아야 할 것들
* module.exports와 require
* require.cache 객체에 파일 이름이 속성명으로 들어 있고 속성값으로는 각 파일의 모듈 객체가 들어 있다.
* 한번 require한 파일은 require.cache에 저장되므로 다음 번에 require할 때는 새로 불러오지 않고 cache에 있는 것이 재사용된다.  
    


<!-- Heading -->   <br/> <br/> <br/>
# 노드 내장 객체 알아보기
노드에서는 기본적인 내장 객체와 내장 모듈을 제공하는데, 따로 설치하지 않아도 바로 사용할 수 있으며, 브라우저의 window객체와 비슷하다고 보면 됩니다.

<!-- Bullet List -->

1.  global 객체
2. global 객체 안에 있는 console 객체
* console.time(레이블)
* console.log(내용)
* console.error(에러 내용)
* console.table(배열)
3. 타이머
* setTimeout(콜백 함수, 밀리초)
* setInterval(콜백 함수, 밀리초)
* setImmediate(콜백 함수)
* clearTimeout(아이디) -> setTimeout을 취소
* clearInterval(아이디) -> setInterval을 취소
* clearImmediate(아이디) -> setImmediate를 취소

4. process 객체

<!-- Heading --> <br/> <br/> <br/>
# 노드 내장 모듈 사용하기

1. os 모듈
2. path 모듈
3. url 모듈
* WHATWG 방식과 기존 노드의 URL 방식 알고 있기
4. crypto 모듈
* 단방향 암호화 개념, 복호화 개념
5. util 모듈
* deprecated란? '중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될' 것이라는 뜻이다. 새로운 기능이 나와서 기존 기능보다 더 좋을 때, 기존 기능을 deprecated 처리하곤 한다.

6. worker_threads 모듈
7. child_process 모듈

<!-- Heading --> <br/> <br/> <br/>
# 파일 시스템 접근

fs 모듈을 통해서 접근한다.
* 동기 메서드와 비동기 메서드
* 버퍼와 스트림 이해
* 스레드 풀 개념 이해 및 알아보기
* 이벤트 이해

<!-- Heading --> <br/> <br/> <br/>
# 노드에서 예외 처리의 중요성

멀티 스레드 프로그램에서는 스레드 하나가 멈추면 그 일을 다른 스레드가 대신하지만, 노드는 메인 스레드가 하나뿐이므로 하나를 소중히 보호해야 한다. 따라서 에러로 인해 메인 스레드가 멈춘다는 것은 프로세스가 멈춘다는 것을 직결됨으로, 에러를 처리하는 방법을 익혀야 한다!





