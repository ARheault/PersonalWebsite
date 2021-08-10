'use strict';
const express = require("express");

var http = require('http');
var port = process.env.PORT || 1337;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
})

const expressServer = app.listen(port, () => {
    console.log("Server Started");
})
