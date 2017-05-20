class ConfigurationData {
  get MongoDBUrl() {
    return this.mongoDBUrl;
  }
  set MongoDBUrl(url) {
    this.mongoDBUrl = url;
  }
  get NodeEnv() {
    return this.nodeEnv;
  }
  set NodeEnv(environment) {
    this.nodeEnv = environment;
  }

  toString() {
    const output = {
      MongoDBUrl: this.MongoDBUrl,
      NodeEnv: this.NodeEnv,
    };

    return JSON.stringify(output, null, 2);
  }
}

module.exports = ConfigurationData;
