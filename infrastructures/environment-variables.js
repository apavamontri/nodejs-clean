/**
 * Environment variable class is responsible for loading environment variables
 * from process and/or operating system so it is available to be used in
 * this application
 */
const ConfigurationData = require('../domains/configuration-data');

class EnvironmentVariable {
  load() {
    const configurationData = new ConfigurationData();

    configurationData.MongoDBUrl = process.env.MONGODB_URL;
    configurationData.NodeEnv = process.env.NODE_ENV;

    return configurationData;
  }
}

module.exports = EnvironmentVariable;
