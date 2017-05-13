const VersionInteractor = require('./usecases/version');
const WebServerInterface = require('./interfaces/webserver');
const ExpressWebServer = require('./infrastructures/express-server');

const versionInteractor = new VersionInteractor();
const webserverInterface = new WebServerInterface({
  VersionInteractor: versionInteractor,
});

const expressWebServer = new ExpressWebServer({
  WebServerInterface: webserverInterface,
});

expressWebServer.start();
