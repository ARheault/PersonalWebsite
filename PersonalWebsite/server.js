'use strict';
const express = require("express");
const path = require("path");

var http = require('http');
var port = process.env.PORT || 1337;

const app = express();

app.get('/', (req, res) => {
	//	res.send("Run it");
	res.sendFile(path.join(__dirname, "/public/index.html"));
})

const expressServer = app.listen(port, () => {
	console.log("Server Started");
})
