'use strict';

var request = new XMLHttpRequest();
var bridge = '#';
var auth = '#';

function onState(light, state) {
  request.open('PUT', "http://" + bridge + /api/ + auth + "/lights/" + light + "/state", true);
  request.send('{"on":' + state + '}');
}

function offState(light, state) {
  request.open('PUT', "http://" + bridge + /api/ + auth + "/lights/" + light + "/state", true);
  request.send('{"off":' + state + '}');
}

function getBridges() {
	request.open('GET',"https://www.meethue.com/api/nupnp", true);
  bridge = request.responseText;
	console.log(request.responseText);
}
