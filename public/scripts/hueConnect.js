'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 31337;
var Hue = require('philips-hue');
var hueLight = new Hue();
var green = {bri: 254, sat: 254, hue: 25500};
var red = {bri: 254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

app.use(express.static('./'));

// app.get('/', function (request, response) {
//     response.sendFile('index.html', {root: '.'});
// });
// var resources = [
//     {
//         id: 1,
//         name: 'Foo'
//     }
// ];
// app.get('/resources', function (request, response) {
//     response.send(resources);
// });

hueLight.bridge = '10.0.0.78';
hueLight.username = 'RraNKoHt-eumNLAnjUkPp0gUPjszEHjxFxvLTP4u';






function startSession() {
    hueLight.light(1).on();
    hueLight.light(1).setState(blue);
}
function startRecord() {
    hueLight.light(1).on();
    hueLight.light(1).setState(red);
  // hueLight.light(2).on();
}
function stopRecord() {
    hueLight.light(1).setState(green);
}

function endSession() {
    hueLight.light(1).off();
  // hueLight.light(2).off;
}
startSession();
// startRecord();
// stopRecord();
// endSession();


app.listen(PORT, function () {
    console.log(`My server is running on port: ${PORT}`);
});
