let express = require('express');
let app = express();

app.listen(3000, function () {
	console.log('start nodejs!!');
});

// url routing
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/main.html');
	// res.send('<h1>hi, express</h1>');
});
