'use strict';

var Hue = require('philips-hue');
var hueLight = new Hue();
var green = {bri: 254, sat: 254, hue: 25500};
var red = {bri: 254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

hueLight.bridge = '192.168.1.135';
hueLight.username = 'EC9u1ZUDvc0EPEvNxW1rHFaukQ12pJGHUC5RgsPg';

function startSession() {
    console.log('I started recording');
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
startRecord();
stopRecord();
endSession();
