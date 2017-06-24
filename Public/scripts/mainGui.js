'use strict';

$('#start-session-button').click(function () {
  $('#start-session-button').toggleClass('display-none');
  $('#end-session-button').toggleClass('display-none');
  document.getElementById('recording-container').style.borderColor = 'blue';
  document.getElementById('recording-status').innerHTML = 'Recording will start in: ';
  $('#start-recording-button').toggleClass('display-none');
  $('#stop-recording-button').toggleClass('display-none');
  var startCount = setInterval(setTimer, 1000);
  // setTimer();
  // startSession();
});
$('#end-session-button').click(function () {
  $('#start-session-button').toggleClass('display-none');
  $('#end-session-button').toggleClass('display-none');
  $('#start-recording-button').toggleClass('display-none');
  $('#stop-recording-button').toggleClass('display-none');
  document.getElementById('recording-container').style.background = 'white';
  document.getElementById('recording-status').innerHTML = 'Recording not in Session';
  document.getElementById('recording-status').style.color = 'black';
});
$('#start-recording-button').click(function () {
  $('#start-recording-button').toggleClass('display-none');
  $('#stop-recording-button').toggleClass('display-none');
  document.getElementById('recording-container').style.background = 'red';
  document.getElementById('recording-status').innerHTML = 'Recording in Session!';
  document.getElementById('recording-status').style.color = 'white';
});

$('#stop-recording-button').click(function () {
  $('#start-recording-button').toggleClass('display-none');
  $('#stop-recording-button').toggleClass('display-none');
  document.getElementById('recording-container').style.background = 'white';
  document.getElementById('recording-status').innerHTML = 'Recording not in Session';
  document.getElementById('recording-status').style.color = 'black';
});
