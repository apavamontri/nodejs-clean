/**
 * WebServer interface is a gateway between usecases and web server detail
 * implementation
 */
class WebServer {
  // constructor()
  // We are injecting the interactors as part of the constructor
  constructor(options) {
    this.versionInteractor = options.VersionInteractor;
  }

  // displayApiVersion() show the current API version
  displayApiVersion() {
    return this.versionInteractor.display();
  }

  static toString() {
    return 'Web Server Interfaces';
  }
}

module.exports = WebServer;
