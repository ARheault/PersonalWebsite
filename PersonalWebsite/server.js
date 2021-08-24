const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
const mailGun = require("mailgun-js");
const bodyParser = require("body-parser");
require('dotenv').config({path: __dirname + "/.env"});

api_key = process.env.APIKEY;
Domain = process.env.DOMAIN;
Email = process.env.EMAIL;

const mg = mailGun({apiKey: api_key, domain: Domain});

var port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));

/*app.use(express.urlencoded({
	extend: false,
}));
app.use(express.json());*/
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get('/About', (req, res) => {
	res.sendFile(path.join(__dirname, "public/about.html"));
})

app.get('/Projects', (req, res) => {
	res.sendFile(path.join(__dirname, "public/projects.html"));
})

app.get('/Resume', (req, res) => {
	res.sendFile(path.join(__dirname, "public/resume.html"));
})

app.get('/Contact', (req, res) => {
	res.sendFile(path.join(__dirname, "public/contact.html"));
})

app.post('/SubmitContact', (req, res) => {
	const mailgun = require("mailgun-js");
	const DOMAIN = "sandbox83363359caf348ae9e955696fd7ffdbd.mailgun.org"; 
	const mg = mailgun({apiKey: "4fe1fa9b089404263dd1fce483ed3333-9776af14-afb0d012", domain: DOMAIN});
	const data = req.body.submission;

	const mail = {
		from: data._Email,
		to: Email,
		subject: data._First + "\, " + data._Last + " (" + data._Pronouns + ")\,",
		text: "Message from " + data._First + "\," + data._Last + " (" + data._Pronouns + ")\,\n\n" + data._Message + "\n\n Sent from personal website emailer: " + data._Email
	};
	mg.messages().send(mail, function (error, body) {
		console.log(body);
		return res.json("Email Queued");
	});
})

const expressServer = app.listen(port, () => {
	console.log("Server Started");
})
