const express = require("express");
const path = require("path");

var http = require('http');
var port = process.env.PORT || 1337;

const app = express();

app.use(express.static(path.join(__dirname, "public/")));
//app.use(express.static(path.join(__dirname,'public/styles/')));

app.get('/', (req, res) => {
	//	res.send("Run it");
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

/*app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "public/404.html"));
})*/

const expressServer = app.listen(port, () => {
	console.log("Server Started");
})
