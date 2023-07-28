const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

class WebApp {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
  }

  initRoutes() {
    // Panggil routes
    const routes = require('./routes/routes');
    this.app.use('/auth', require('./middleware'));
    routes(this.app);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ` + this.port);
    });
  }
}

// Inisialisasi aplikasi
const webApp = new WebApp();
webApp.start();
