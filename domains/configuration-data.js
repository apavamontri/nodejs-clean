/**
 * Configuration data domain encapsulate all the configuration settings data
 * to be used in the application
 */
class ConfigurationData {
  // Connection string to MongoDB getter and setter
  get MongoDBUrl() {
    return this.mongoDBUrl;
  }
  set MongoDBUrl(url) {
    this.mongoDBUrl = url;
  }

  // Node Environment Name getter and setter
  // Usually 'development', 'staging', 'production
  get NodeEnv() {
    return this.nodeEnv;
  }
  set NodeEnv(environment) {
    this.nodeEnv = environment;
  }

  // toString() print out all the configuration data in easy to read format
  toString() {
    const output = {
      MongoDBUrl: this.MongoDBUrl,
      NodeEnv: this.NodeEnv,
    };

    return JSON.stringify(output, null, 2);
  }
}

module.exports = ConfigurationData;
