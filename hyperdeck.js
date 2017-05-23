var HyperdeckLib = require("hyperdeck-js-lib");

var hyperdeck = new HyperdeckLib.Hyperdeck("#");

hyperdeck.play()
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
