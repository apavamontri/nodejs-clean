class Configuration {
  constructor(options) {
    this.configurationInterface = options.ConfigurationInterface;
  }
  load() {
    return this.configurationInterface.load();
  }
}

module.exports = Configuration;
