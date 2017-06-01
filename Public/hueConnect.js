'use strict';

// var Hue = require('philips-hue');
// var hue = new Hue();
// var http = require('http');
var green = {bri:254, sat:254, hue:25500};
var red = {bri:254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

hue.bridge = '192.168.1.135';
hue.username = 'H5KTxVDdG39UvdgkpVnri3AVbzwgwaIowC53RT9F';

// http.createServer(function(request, response){
//   response.write(req.url);
// }).listen(8080);

hue.getBridges()
  .then(function(bridges){
    console.log(bridges);
    var bridge = bridges[0]; // use 1st bridge
    console.log('bridge: ' + bridge);
    return hue.auth(bridge);
  })
  .then(function(username){
    console.log('username: ' + username);
  })
  .catch(function(err){
    console.error(err.stack || err);
  });

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

startSession();
// startRecord();
// stopRecord();
endSession();
