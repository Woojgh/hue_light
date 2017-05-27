'use strict';

var Hue = require('philips-hue');
var hue = new Hue();
var green = {bri:254, sat:254, hue:25500};
var red = {bri:254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

hue.bridge = '192.168.1.135';
hue.username = 'EC9u1ZUDvc0EPEvNxW1rHFaukQ12pJGHUC5RgsPg';

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
startRecord();
stopRecord();
endSession();
