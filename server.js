/**
 * server.js is a starting point
 */
const EnvironmentVariables = require('./infrastructures/environment-variables');
const ExpressWebServer = require('./infrastructures/express-server');

const ConfigurationAdapter = require('./interfaces/configuration');
const WebServerInterface = require('./interfaces/webserver');

const ConfigurationInteractor = require('./usecases/configuration');
const VersionInteractor = require('./usecases/version');

const environmentVariable = new EnvironmentVariables();
const configurationAdapter = new ConfigurationAdapter({
  ConfigurationAdapter: environmentVariable,
});

const configurationInteractor = new ConfigurationInteractor({
  ConfigurationInterface: configurationAdapter,
});

const configuraionData = configurationInteractor.load();

// Print out the current configuration data for testing purpose
console.log(configuraionData.toString());

const versionInteractor = new VersionInteractor();
const webserverInterface = new WebServerInterface({
  VersionInteractor: versionInteractor,
});

const expressWebServer = new ExpressWebServer({
  WebServerInterface: webserverInterface,
});

expressWebServer.start();
