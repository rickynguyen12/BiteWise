
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

// const hostname = '127.0.0.1';
// const port = 3000;
const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html" )
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000")
});
