/**
 * Configuration usecases is a business logic of configuration
 */
class Configuration {
  // Constructor
  // We are injecting the configuration interface as part of the constructor
  constructor(options) {
    this.configurationInterface = options.ConfigurationInterface;
  }

  // load() is responsible for loading configuration data
  load() {
    // We are loading the configuration using the interface
    // Notice that we are duck typing here by assuming that interface
    // that is injected has load() method
    return this.configurationInterface.load();
  }
}

module.exports = Configuration;
