class Configuration {
  constructor(options) {
    this.configurationAdapter = options.ConfigurationAdapter;
  }

  load() {
    return this.configurationAdapter.load();
  }
}

module.exports = Configuration;
