'use strict';

var Hue = require('philips-hue');
var hue = new Hue();
var http = require('http');
var green = {bri:254, sat:254, hue:25500};
var red = {bri:254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

hue.bridge = '10.0.0.65';
hue.username = 'kGjnsXa61BlsHGvJu4oYzNdeDyZAo-urVT2TK6xo';

http.createServer(function(request, response){
  response.write(req.url);
}).listen(8080);

function startSession() {
  hue.light(1).on();
  hue.light(1).setState(blue);
}
function startRecord() {
  hue.light(1).on();
  hue.light(1).setState(red);
  // hue.light(2).on();
}
function stopRecord() {
  hue.light(1).setState(green);
}

function endSession() {
  hue.light(1).off();
  // hue.light(2).off;
}

// startSession();
// startRecord();
// stopRecord();
// endSession();
