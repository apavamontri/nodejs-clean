/**
 * Environment variable class is responsible for loading environment variables
 * from process and/or operating system so it is available to be used in
 * this application
 */
const ConfigurationData = require('../domains/configuration-data');

class EnvironmentVariable {

  // load() is responsible for loading configuration data
  load() {
    // By using the domain's Configuration data object here
    // we referred from the domain layer which doesn't break the dependency
    // rule of the clean architecture
    const configurationData = new ConfigurationData();

    // We are loding the configuration from the environment variable
    configurationData.MongoDBUrl = process.env.MONGODB_URL || 'localhost';
    configurationData.NodeEnv = process.env.NODE_ENV || 'development';
    configurationData.SecretKey = process.env.SECRET_KEY || 'secret';

    return configurationData;
  }
}

module.exports = EnvironmentVariable;
