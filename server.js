
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Hue = require('philips-hue');
var hue = new Hue();
var PORT = process.env.PORT || 31337;

hue.bridge = '10.0.0.78';
hue.username = 'Vqx3MqS2xgoWcIfZntHK23Lns4RlK0ZEGyX70nOY';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var resources = [
    {
        id: 1,
        name: 'Foo'
    }
];
app.get('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = resources.filter(r => r.id === id)[0];

    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});

app.post('/resources', function(req, res) {
    var item = req.body;

    if (!item.id) {
        return res.sendStatus(500);
    }

    resources.push(item);

    res.send('/resources/' + item.id);
});

app.put('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = resources.filter(r => r.id === id)[0];

    if (!existingItem) {
        var item = req.body;
        item.id = id;
        resources.push(item);
        res.setHeader('Location', '/resources/' + id);
        res.sendStatus(201);
    } else {
        existingItem.name = req.body.name;
        res.sendStatus(204);
    }
});

app['delete']('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = resources.filter(r => r.id === id)[0];

    if (!existingItem) {
        return res.sendStatus(404);
    }

    resources = resources.filter(r => r.id !== id);
    res.sendStatus(204);
});
app.use(express.static('./public'));

app.get('/', function (request, response) {
    response.sendFile('index.html', {root: '.'});
});

app.listen(PORT, function () {
    console.log(`My server is running on port: ${PORT}`);
});

