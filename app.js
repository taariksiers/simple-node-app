const express = require('express');
const appDebug = require('debug')('app:debug');

const app = express();

const port = process.env.PORT || 9100;

app.get('/ping', function(req, res) {
  appDebug('Incoming Request: /ping');
  res.send('P O N G!');
});

app.get('/', function(req, res) {
  appDebug('Incoming Request: /');
  res.send('Welcome to the simple-node-app!');
});

app.get('*', function(req, res) {
  appDebug('Incoming Request to unknown route.');
  res.status(404).send('Yeah nah yeah there\'s no route for this. Try [/ping]');
});

app.listen(port);
appDebug('App started. Listening on port: ' + port);
