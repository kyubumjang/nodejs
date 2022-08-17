let express = require('express');
let app = express();

app.listen(3000, function () {
	console.log('start nodejs!!');
});

/* 
  static 파일(JS, CSS, image 파일)들을 public 폴더에 두고 관리할 때
  express에 등록하는 절차
*/
app.use(express.static('public'));

// url routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
	// res.send('<h1>hi, express</h1>');
});

app.get('/main', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
	// res.send('<h1>hi, express</h1>');
});
