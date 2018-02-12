const express = require('express');
var unirest = require("unirest");

// Constants
const PORT = 9000;
const HOST = '0.0.0.0';

// App
const app = express();
var apiName = "http://" + (process.env.HOST_NAME || 'localhost:5009');
function callApi() {
    var req = unirest("GET", apiName);

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
        
    });
}
console.log('calling API-->' + apiName);
callApi();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);