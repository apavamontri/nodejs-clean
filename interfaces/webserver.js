class WebServer {
  constructor(options) {
    this.versionInteractor = options.VersionInteractor;
  }
  displayApiVersion() {
    return this.versionInteractor.display();
  }

  static toString() {
    return 'Web Server Interfaces';
  }
}

module.exports = WebServer;
