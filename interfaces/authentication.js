class Authentication {
  constructor(options) {
    this.uniqueIdAdapter = options.UniqueIdAdapter;
    this.webTokenAdapter = options.WebTokenAdapter;
  }

  getNewUserId() {
    return this.uniqueIdAdapter.getNewUuid();
  }

  getNewWebToken(options) {
    return this.webTokenAdapter.getNewJsonWebToken(options);
  }
}

module.exports = Authentication;
