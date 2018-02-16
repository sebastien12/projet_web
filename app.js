var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var mail = require("nodemailer").mail;

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('encryption/server.key', 'utf8');
var certificate = fs.readFileSync('encryption/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('/static'));

app.get('/', function (req, res) {
    res.render('home');
});

// comment afficher la page inbox
app.get('/inbox', function (req, res) {
	res.render('inbox', { swag: 'SHOW TUFF' })
});

app.get('/send', function (req, res) {
	res.json({ test: '1'})
});

// Ici tu doiss utiliser la librairy pour envoyer des emails
app.post('/sendEmail', function (req, res){
	var from = req.body.from;
	var to = req.body.to;
	var subject = req.body.subject;
	var message = req.body.message;

	res.render('home')
	
//	mail({
//		from: from, // sender address
//		to: to, // list of receivers
//		subject: subject, // Subject line
//		text: message, // plaintext body
//		// html: "<b>Hello world ✔</b>" // html body
//	});
});
var httpsServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

 httpsServer.listen(33333);


//{ 
//	from: 'from@gmail.com',
//	to: 'to@gmail.com',
//	subject: 'blabla',
//	message: 'blablablabla'
//}