const express = require('express');

const app = express();

class ExpressServer {
  constructor(options) {
    this.webserverInterface = options.WebServerInterface;
  }
  static toString() {
    return 'Express Server Infrastructure';
  }
  start() {
    app.get('/', (req, res) => {
      res.type('application/json');
      res.status(200).send(this.webserverInterface.displayApiVersion());
    });

    app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  }
}

module.exports = ExpressServer;
