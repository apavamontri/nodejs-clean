/**
 * Express server class is responsible for serving the API using
 * the Express web framework 
 */
const express = require('express');

const app = express();

class ExpressServer {
  // constructor()
  // We are injecting the interface as part of the constructor
  constructor(options) {
    this.webserverInterface = options.WebServerInterface;
  }
  static toString() {
    return 'Express Server Infrastructure';
  }

  // start() is the starting point of the web server
  start() {
    app.get('/', (req, res) => {
      res.type('application/json');

      // We are getting the current API number via the interface we injected
      // from the constructor
      res.status(200).send(this.webserverInterface.displayApiVersion());
    });

    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  }
}

module.exports = ExpressServer;
