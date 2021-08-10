'use strict';
const express = require("express");
const path = require("path");

var http = require('http');
var port = process.env.PORT || 1337;

const app = express();
/*
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
*/
app.use(express.static(__dirname, "/public"));
const expressServer = app.listen(port, () => {
	console.log("Server Started");
})
