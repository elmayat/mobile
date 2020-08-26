//jshint esversion: 6

const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

//Check if Cookie Message is accepted
window.addEventListener("cookieAlertAccept", function() {
    alert("cookies accepted")
});