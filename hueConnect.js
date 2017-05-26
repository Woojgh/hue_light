'use strict';

var hue = jsHue()

hue.discover().then(bridges=> {
  if(bridges.length === 0) {
    console.log("Bridges not found");
  }
  else {
    bridges.forEach(b => console.log('Bridge IP at %s', b.internalipaddress));
  }
}).catch(e => console.log('Error finding bridges', e));
