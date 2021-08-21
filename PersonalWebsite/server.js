const express = require("express");
const path = require("path");
const nodeMailer = require('nodemailer');
require('dotenv').config();
const { google } = require("googleapis");
const { oauth2 } = require("googleapis/build/src/apis/oauth2");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENTID,
    process.env.CLIENTSECRET,
    process.env.REDIRECT
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESHTOKEN
});
const accessToken = oauth2Client.getAccessToken();

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
            type: "OAuth2",
            user: process.env.USER,
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            refreshToken: process.env.REFRESHTOKEN,
            accessToken: accessToken
        }
    });

    const options = {
        from: data.Email,
        to: process.env.USER,
        subject: `${data.First}, ${data.Last} contact request`,
        generateTextFromHTML: true,
        html: data.Message
    }
    Mailing.sendMail(options, (err, res) => {
        if (err) {
            res.json({ err: `${err}`);
            Mailing.close();

        } else {
            res.json({ success: "True" });
            Mailing.close();
        }
    });
});

const expressServer = app.listen(port, () => {
    console.log("Server Started");
})
