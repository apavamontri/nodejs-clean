/**
 * server.js is a starting point
 */
const EnvironmentVariables = require('./infrastructures/environment-variables');
const ExpressWebServer = require('./infrastructures/express-server');
const JsonWebToken = require('./infrastructures/json-web-token');
const MongoDb = require('./infrastructures/mongodb');
const UniqueId = require('./infrastructures/unique-id');

const AuthenticationInterface = require('./interfaces/authentication');
const ConfigurationInterface = require('./interfaces/configuration');
const DatabaseInterface = require('./interfaces/database');
const WebServerInterface = require('./interfaces/webserver');

const ConfigurationInteractor = require('./usecases/configuration');
const VersionInteractor = require('./usecases/version');
const UserInteractor = require('./usecases/user');

const environmentVariable = new EnvironmentVariables();
const configurationInterface = new ConfigurationInterface({
  ConfigurationAdapter: environmentVariable,
});

const configurationInteractor = new ConfigurationInteractor({
  ConfigurationInterface: configurationInterface,
});

const configuraionData = configurationInteractor.load();

// Print out the current configuration data for testing purpose
console.log(configuraionData.toString());

const authenticationInterface = new AuthenticationInterface({
  UniqueIdAdapter: UniqueId,
  WebTokenAdapter: JsonWebToken,
});

const databaseInterface = new DatabaseInterface({
  DatabaseAdapter: MongoDb,
});

const userInteractor = new UserInteractor({
  ConfigurationData: configuraionData,
  AuthenticationInterface: authenticationInterface,
  DatabaseInterface: databaseInterface,
});

const output = userInteractor.createNewEmailUser({
  Email: 'someone@somewhere.net',
  Password: 'secret',
});

console.log(JSON.stringify(output, null, 2));

const versionInteractor = new VersionInteractor();
const webserverInterface = new WebServerInterface({
  VersionInteractor: versionInteractor,
});

const expressWebServer = new ExpressWebServer({
  WebServerInterface: webserverInterface,
});

expressWebServer.start();
