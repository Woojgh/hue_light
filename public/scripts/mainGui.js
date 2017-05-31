'use strict';

var Hue = require('philips-hue');
var hueLight = new Hue();
var green = {bri: 254, sat: 254, hue: 25500};
var red = {bri: 254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

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

$('#start-session-button').click(function () {
    startSession();
    $('#start-session-button').toggleClass('display-none');
    $('#end-session-button').toggleClass('display-none');
    document.getElementById('recording-container').style.borderColor = 'blue';
    document.getElementById('recording-status').innerHTML = "Recording will start in: ";
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    // var startCount = setInterval(setTimer, 1000);
});
$('#end-session-button').click(function () {
    $('#start-session-button').toggleClass('display-none');
    $('#end-session-button').toggleClass('display-none');
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    document.getElementById('recording-container').style.background = 'white';
    document.getElementById('recording-status').innerHTML = "Recording not in Session";
    document.getElementById('recording-status').style.color = "black";
});
$('#start-recording-button').click(function () {
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    document.getElementById('recording-container').style.background = 'red';
    document.getElementById('recording-status').innerHTML = "Recording in Session!";
    document.getElementById('recording-status').style.color = "white";
});

$('#stop-recording-button').click(function () {
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    document.getElementById('recording-container').style.background = 'white';
    document.getElementById('recording-status').innerHTML = "Recording not in Session";
    document.getElementById('recording-status').style.color = "black";
});





//For use with the electron package

// const electron = requirte('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// const path = require('path')
// const url = require('url')

// let mainWindow;

// function createWindow () {
//   mainWindow = new BrowserWindow({width: 800, height: 600});
//   mainWindow.loadURL(url.format({
//       pathname: path.join(__dirname, 'index.html'),
//       protocol: 'file',
//       slashes: true
//   }));

//   mainWindow.on('closed', function () {
//     mainWindow = null;
//   });
// };

// app.on('ready', createWindow);
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   };
// });

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow();
//   };
// });

// $(function(){
//   $(".fancy-button").mousedown(function(){
//     $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
//         $(this).removeClass('active');
//     })
//      $(this).addClass("active");
//   });
// });