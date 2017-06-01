
var Hue = require('philips-hue');
var hue = new Hue();
var express = require('express');
var HyperdeckLib = require('hyperdeck-js-lib');
var hyperdeck = new HyperdeckLib.Hyperdeck('10.0.0.68');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => res.sendFile('index.html', {root: './Public'}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
