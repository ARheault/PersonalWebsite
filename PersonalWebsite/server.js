const express = require("express");
const path = require("path");
const nodeMailer = require('nodemailer');
require('dotenv').config();

var port = process.env.PORT || 1337;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));

app.use(express.urlencoded({
    extend: false,
}));
app.use(express.json());

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

app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, "public/contact.html"));
})

app.post('/SubmitContact', (req, res) => {
    const data = req.body;

    let Mailing = nodeMailer.createTransport({
        service: "Gmail",
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: process.env.USER,
                pass: process.env.PASS
            })
        }
    });

    Mailing.sendMail({
        from: data.Email,
        to: process.env.USER,
        subject: `${data.First}, ${data.Last} contact request`,
        html: `${data.Pronouns}

                ${data.Message}`
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Contact Request Sent");
        }

        Mailing.close();
    });
});

const expressServer = app.listen(port, () => {
    console.log("Server Started");
})
