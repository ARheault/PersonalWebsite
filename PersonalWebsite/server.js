const express = require("express");
const path = require("path");
const nodeMailer = require("nodemailer");
require('dotenv').config();
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key: process.env.APIKEY,
        domain: process.env.DOMAIN
    }
};
var port = process.env.PORT || 1337;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));

app.use(express.urlencoded({
    extend: false,
}));
app.use(express.json());

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
    const data = req.body;

    let transport = nodeMailer.createTransport(mailGun(auth));

    const mailOptions = {
        sender: data._First + ", " + data._Last,
        from: data._Email,
        to: process.env.EMAIL,
        subject: data._First + ", " + data._Last + " From Website",
        text: text
    };

    transport.sendMail(mailOptions, (err, data) => {
        if (err) {
            return res.json("Error: " + err);
        } else {
            return res.json("Success");
        }
    });
});

const expressServer = app.listen(port, () => {
    console.log("Server Started");
})
