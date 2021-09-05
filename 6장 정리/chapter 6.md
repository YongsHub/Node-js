# Express 모듈 사용하기

<!--Bullet List-->
* package.json의 script 부분에 start 속성은 잊지 말고 넣어줘야 합니다. nodemon app을 하면 .js를 nodemon으로 실행한다는 뜻입니다. 서버 코드에 수정 사항이 생길 때마다 매번 서벌르 재시작하면 nodemon이 서버를 자동으로 재시작합니다.

* Express 모듈을 실행해 app변수에 할당합니다. 익스프레스 내부에 http 모듈이 내장되어 있으므로 서버의 역할을 할 수 있습니다.
* app.set('port', process.env.PORT || 3000);
* app.get(주소, 라우터)는 주소에 대한 GET 요청이 올 때 어떤 동작을 할지 적는 부분입니다.

* GET요청 외에도 POST, PUT, PATCH, DELETE, OPTIONS에 대한 라우터를 위한 app.post, app.put, app.patch, app.delete, app.options 메서드가 존재합니다.

<br>
<br>

## 자주 사용하는 미들웨어

> 미들웨어는 익스프레스의 핵심입니다. 요청과 응답의 중간(미들(middle))에 위치하여 미들웨어라고 부릅니다. 뒤에 나오는 라우터와 에러 핸들러 또한 미들웨어의 일종이므로 미들웨어가 익스프레스의 전부라고 해도 과언이 아니다. 미들 웨어는 app.use와 함께 사용됩니다.

* app.use에 매개변수가 req, res, next인 함수를 넣으면 됩니다. 미들웨어는 위에서부터 아래로 순서대로 실행되면서 요청과 응답 사이에 특별한 기능을 추가할 수 있다.

* 주소를 첫 번째 인수로 넣어주지 않는다면 미들웨어는 모든 요청에서 실행되고, 주소를 넣는다면 해당하는 요청에서만 실행된다.

* app.use나 app.get 같은 라우터에 미들웨어를 여러 개 장착할 수 있다.

* 에러 처리 미들웨어 = 매개 변수가 반드시 4개 : err, req, res, next

* 미들웨어를 통해 요청과 응답에 다양한 기능을 추가할 수 있고, morgan, cookie-parser, express-session, dotenv 등이 있다.

> dotenv 패키지는 .env 파일을 읽어서 process.env로 만든다. dotenv 패키지의 이름이 dot(점) + env인 이유이다.

> morgan은 기존 로그 외에 추가적인 로그를 볼 수 있습니다. 
app.use(morgan('dev'));
인수로 dev 외에 combined, common, short, tiny 등을 넣을 수 있다.

> static 미들웨어는 정적인 파일들을 제공하는 라우터 역할을 합니다. 기본적으로 제공되므로 따로 설치할 필요 없이 express 객체 안에서 꺼내 장착하면 됩니다.

> body-parser는 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어입니다. 보통 폼 데이터나 AJAX 요청의 데이터를 처리합니다. app.use(express.json()); app.use(express.urlencoded({extended : false})); 4.16.0 버전부터 body-parser 미들웨어의 일부 기능이 익스프레스에 내장되었으므로 따로 설치할 필요가 없다.

> body-parser를 직접 설치해야 하는 경우도 있습니다. Raw, Text 형식의 데이터를 추가로 해석할 수 있습니다. Raw는 요청의 본문이 버퍼 데이터일 때, Text는 텍스트 데이터일 때 해석하는 미들웨어입니다. 버퍼나 텍스트 요청을 처리할 필요가 있다면 body-parser를 설치한 후 다음과 같이 추가합니다.

* 원래는 POST와 PUT 요청의 본문을 전달받으려면 req.on('data')와 req.on('end')로 스트림을 사용해야 했지만 body-parser를 사용하면 그럴필욕 없다. 이 패키지가 내부적으로 스트림을 처리해 req.body에 추가합니다.

* 예를 들어, JSON 형식으로 {name: 'zerocho', book: 'nodejs'}를 본문으로 보낸다면 req.body에 그대로 들어갑니다. URL-encoded 형식으로 name=zerocho&book=nodejs를 본문으로 보낸다면 req.body {name: 'zerocho', book: 'nodejs'}가 들어갑니다.

* cookie-parser는 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만듭니다.

> express-session은 세션 관리용 미들웨어입니다. 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 유용하다.

> 미들웨어의 주의사항
<br>
다음 미들웨어로 넘어가려면 next 함수를 호출해야 합니다. 위 미들웨어들은 내부적으로 next를 호출하고 있으므로 연달아 쓸 수 있습니다. next를 호출하지 않는 미들웨어는 res.send나 res.sendFile등의 메서드로 응답을 보내야 합니다. express.static과 같은 미들웨어는 정적 파일을 제공할 때 next 대신 res.sendFile 메서드로 응답을 보냅니다. 따라서 정적 파일을 제공하는 경우 express.json, express.urlencoded, cookieParser 미들웨어는 실행되지 않습니다.



