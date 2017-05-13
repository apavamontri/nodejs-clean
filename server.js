const VersionInteractor = require('./usecases/version');
const WebServerInterface = require('./interfaces/webserver');
const express = require('express');

const versionInteractor = new VersionInteractor();
const webserverInterface = new WebServerInterface({
  VersionInteractor: versionInteractor,
});

const app = express();

app.get('/', (req, res) => {
  res.send(webserverInterface.displayApiVersion());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
