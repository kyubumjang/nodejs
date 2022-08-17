let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.listen(3000, function () {
	console.log('start nodejs!!');
});

/* 
  static 파일(JS, CSS, image 파일)들을 public 폴더에 두고 관리할 때
  express에 등록하는 절차
*/
app.use(express.static('public'));
/*
  주고 받을 때 JSON 형태일 수도 있고
  클라이언트와 서버가 데이터를 주고 받을 때는 인코딩을 해서 데이터를 주고 받는다.
  아스키 형태의 데이터로 주고 받는데 인코딩을 해서 주고받는다.
  한글이나 문자를 다른 문자로 치환하는 것이 인코딩이다.
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// url routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
	// res.send('<h1>hi, express</h1>');
});

app.get('/main', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
});

app.get('/form', function (req, res) {
	res.sendFile(__dirname + '/public/form.html');
});

app.post('/email_post', function (req, res) {
	console.log(req.body.email);
	/* 
  클라이언트에서 전송된 폼이 노드 서버로 오게 된 것
  이 값을 DB를 조회하거나 이 외의 것을 진행할 수 있다.
  */
	// res.send('<h1>Welcome ' + req.body.email + '</h1>');
	res.render('email.ejs', { email: req.body.email });
});
