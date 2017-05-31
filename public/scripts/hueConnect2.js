'use strict';

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function (result) {
    console.log(result);
};

var displayError = function (err) {
    console.error(err);
};

var host = "10.0.0.65",
    username = "OITL4J0sO02XlZOgMSCcGYpiSImZGARw-sdl2n-B",
    api = new HueApi(host, username),
    state = lightState.create();

// --------------------------
// Using a promise

// Set the lamp with id '2' to on
api.setLightState(1, state.on())
    .then(displayResult)
    .fail(displayError)
    .done();

// Now turn off the lamp
api.setLightState(1, state.off())
    .then(displayResult)
    .fail(displayError)
    .done();

// --------------------------
// Using a callback
// Set the lamp with id '2' to on
$('#start-session-button').click(function () {
    api.setLightState(1, state.on(), function(err, result) {
        if (err) throw err;
        displayResult(result);
    });
});