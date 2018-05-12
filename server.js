const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

  //mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');

  app.unsubscribe(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  var routes = require('./api/routes/todoListRoutes');
  routes(app);
app.listen(port);

console.log('TodoList RESTful API server started on: ' + port);
