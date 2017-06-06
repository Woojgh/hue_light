
var Hue = require('philips-hue');
var hue = new Hue();
var express = require('express');
var HyperdeckLib = require('hyperdeck-js-lib');
var hyperdeck = new HyperdeckLib.Hyperdeck('10.0.0.68');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('./Public'));

app.get('/', (req, res) => res.sendFile('index.html', {root: './Public'}));

hyperdeck.onConnected().then(function() {
    // connected to hyperdeck
    // Note: you do not have to wait for the connection before you start making requests.
    // Requests are buffered until the connection completes. If the connection fails, any
    // buffered requests will be rejected.
  hyperdeck.makeRequest("device info").then(function(response) {
    console.log("Got response with code "+response.code+".");
    console.log("Hyperdeck unique id: "+response.params["unique id"]);
  }).catch(function(errResponse) {
    if (!errResponse) {
      console.error("The request failed because the hyperdeck connection was lost.");
    }
    else {
      console.error("The hyperdeck returned an error with status code "+errResponse.code+".");
    }
  });

  hyperdeck.getNotifier().on("asynchronousEvent", function(response) {
    console.log("Got an asynchronous event with code "+response.code+".");
  });

  hyperdeck.getNotifier().on("connectionLost", function() {
    console.error("Connection lost.");
  });
  }).catch(function() {
  console.error("Failed to connect to hyperdeck.");
  });

var green = {bri:254, sat:254, hue:25500};
var red = {bri:254, sat: 254, hue: 0};
var blue = {bri: 254, sat: 254, hue: 46920};

hue.bridge = '192.168.1.135';
hue.username = 'wzR46PIQzO3qUAUss0nqgYDmwq9eof4VTZ9QMXSM';

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

app.get('/startSession', (req, res) => {
  hue.light(1).on();
  hue.light(1).setState(blue);
});

app.get('/startRecord', (req, res) => {
  hue.light(1).on();
  hue.light(1).setState(red);
  // hue.light(2).on();
  hyperdeck.record();
});
app.get('/stopRecord', (req, res) => {
  hue.light(1).on();
  hue.light(1).setState(green);
  hyperdeck.stop();
});

app.get('/endSession', (req, res) => {
  hue.light(1).off();
  // hue.light(2).off;
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
